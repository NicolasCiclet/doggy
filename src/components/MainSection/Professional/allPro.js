import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Button, Form, Select, Checkbox,
} from 'semantic-ui-react';
import {
  getAllCategories, getAllPro, showProFilter, changeProCategory,
} from '../../../actions/pro';
import OnePro from './onePro';

const AllPro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPro());
    dispatch(getAllCategories());
  }, []);

  let professionals = useSelector((state) => state.pro.professionalsApi);

  const categories = useSelector((state) => state.pro.categoriesApi);
  // console.log(categories);
  // je boucle sur toutes les categories
  const categoryOptions = categories.map((oneCategorie) => (
    { text: oneCategorie.name, value: oneCategorie.name }
  ));

  // To open ou close the filter window
  const filter = useSelector((state) => state.pro.showFilter);
  // category save in the state and modified by filter
  const category = useSelector((state) => state.pro.category);

  // filter on professionals by category
  if (category !== '') {
    // eslint-disable-next-line max-len
    professionals = professionals.filter((professional) => (professional.category.name === category));
    console.log(professionals);
  }

  return (
    <div className="all-users">
      <h2 className="cards_title">Les professionels proches de chez vous</h2>
      {!filter && (
      <Button
        className="filter-button"
        type="button"
        onClick={() => {
          dispatch(showProFilter());
        }}
      >
        Filtres
      </Button>
      )}
      {filter && (
        <div className="filter">
          <div className="filter-title">
            <p>Filtrez selon la catégorie:</p>
            <Button
              type="button"
              className="filter-button"
              onClick={() => {
                dispatch(showProFilter());
              }}
            >
              X
            </Button>
          </div>
          <div className="filter-options">
            <Form.Input
              control={Select}
              options={categoryOptions}
              label="Catégorie"
              placeholder="Catégorie"
              onChange={(event, result) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(changeProCategory(result.value));
              }}
            />
            <Form.Field className="filter-option">
              <Checkbox
                radio
                label="Tous"
                name="checkboxRadioGroup"
                value=""
                checked={category === ''}
                onChange={() => {
                  dispatch(changeProCategory(''));
                }}
              />
            </Form.Field>
          </div>
        </div>
      )}
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
