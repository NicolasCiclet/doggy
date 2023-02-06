import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllCategories, getAllPro } from '../../../actions/pro';
import OnePro from './onePro';

const AllPro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPro());

    // Début du code Marine ---------------------------------------------
    dispatch(getAllCategories());
  }, []);

  const professionals = useSelector((state) => state.pro.professionalsApi);

  const categories = useSelector((state) => state.pro.categoriesApi);
  // je boucle sur toutes les categories
  const allNamesCat = categories.map((category) => category.name);

  return (
    <div className="all-users">
      {/* // je boucle sur les noms de categories */}
      <select>
        {allNamesCat.map((names) => (
          <option key={names} value={names}>{names}</option>
        ))}
      </select>
      {/* // Fin du code Marine -------------------------------------------------*/}

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
