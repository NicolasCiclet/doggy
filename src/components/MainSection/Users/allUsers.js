import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Form, Checkbox, Button,
} from 'semantic-ui-react';
import { getAllusers } from '../../../actions/user';
import { changeSexeDog } from '../../../actions/dog';
import OneUser from './oneUser';

const AllUsers = () => {
  // Get all users in the BDD
  // const users = useSelector((state) => state.user.usersToDisplay);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllusers());
  }, []);

  const users = useSelector((state) => state.user.usersApi);
  console.log(users);
  const filter = useSelector((state) => state.user.showFilter);
  // const sexeDog = useSelector((state) => state.user.usersApi.animals.gender);


  return (
    <div className="all-users">
      <h2 className="cards_title">Les amis potentiels proches de chez vous</h2>

      {!filter && (
      <Button
        type="button"
        onClick={() => {
          // dispatch(showFilter());
        }}
      >
        Filtre
      </Button>
      )}
      {filter && (
      <div className="filter">
        <div className="filter-title">
          <p>Sexe du chien:</p>
          <Button
            type="button"
            className="filter-button"
            onClick={() => {
            //  dispatch(showFilter());
            }}
          >
            X
          </Button>
        </div>
        <Form className="filter-options">
          <Form.Field className="filter-option">
            <Checkbox
              radio
              label="Male"
              name="checkboxRadioGroup"
              value="Male"
              checked={sexeDog === 'Male'}
              onChange={() => {
                dispatch(changeSexeDog('Male'));
              }}
            />
          </Form.Field>
          <Form.Field className="filter-option">
            <Checkbox
              radio
              label="Femelle"
              name="checkboxRadioGroup"
              value="Femelle"
              checked={sexeDog === 'Femelle'}
              onChange={() => {
                dispatch(changeSexeDog('Femelle'));
              }}
            />
          </Form.Field>
        </Form>
      </div>
      )}
      <Card.Group itemsPerRow={3}>
        {
          // I use map and a spread operator to have access to all properties
          users.map((user) => (
            <OneUser key={user.id} {...user} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllUsers;
