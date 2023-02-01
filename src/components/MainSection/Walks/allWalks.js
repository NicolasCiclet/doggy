import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllWalk } from '../../../actions/walk';
import OneWalk from './oneWalk';

const AllWalks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWalk());
  }, []);

  const walks = useSelector((state) => state.walk.walksApi);
  return (
    <div className="all-users">
      <h2 className="cards_title">Les balades proches de chez vous</h2>

      {/* Card it's from Semantin UI */}

      <Card.Group itemsPerRow={3}>
        {
          // I use map and a spread operator to have access to all properties
          walks.map((walk) => (
            <OneWalk key={walk.id} {...walk} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllWalks;
