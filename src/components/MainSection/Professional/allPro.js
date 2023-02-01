import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllPro } from '../../../actions/pro';
import OnePro from './onePro';

const AllPro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPro());
  }, []);

  const professionals = useSelector((state) => state.pro.professionalsApi);

  return (
    <div className="all-users">
      <h2 className="cards_title">Les professionels proches de chez vous</h2>
      <Card.Group itemsPerRow={3}>
        {
          // I use map and a spread operator to have access to all properties
          professionals.map((pro) => (
            <OnePro key={pro.id} {...pro} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllPro;
