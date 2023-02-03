import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Form, Checkbox, Button,
} from 'semantic-ui-react';
import { getAllusers, changeSexeUser, showUserFilter } from '../../../actions/user';
import OneUser from './oneUser';

const AllUsers = () => {
  // Get all users in the BDD
  // const users = useSelector((state) => state.user.usersToDisplay);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllusers());
  }, []);

  // All users
  let users = useSelector((state) => state.user.usersApi);
  // console.log(users);

  // To open ou close the filter window
  const filter = useSelector((state) => state.user.showFilter);
  // user gender save in the state and modified by filter
  const gender = useSelector((state) => state.user.userGender);
  // console.log(gender);

  // filter on users by dog gender
  if (gender !== '') {
    // eslint-disable-next-line max-len
    users = users.filter((user) => (user.gender === gender));
    // console.log(users);
  }

  return (
    <div className="all-users">
      <h2 className="cards_title">Les amis potentiels proches de chez vous</h2>

      {!filter && (
      <Button
        type="button"
        onClick={() => {
          dispatch(showUserFilter());
        }}
      >
        Filtre
      </Button>
      )}
      {filter && (
      <div className="filter">
        <div className="filter-title">
          <p>Genre:</p>
          <Button
            type="button"
            className="filter-button"
            onClick={() => {
              dispatch(showUserFilter());
            }}
          >
            X
          </Button>
        </div>
        <Form className="filter-options">
          <Form.Field className="filter-option">
            <Checkbox
              radio
              label="Homme"
              name="checkboxRadioGroup"
              value="Homme"
              checked={gender === 'Homme'}
              onChange={() => {
                dispatch(changeSexeUser('Homme'));
              }}
            />
          </Form.Field>
          <Form.Field className="filter-option">
            <Checkbox
              radio
              label="Femme"
              name="checkboxRadioGroup"
              value="Femme"
              checked={gender === 'Femme'}
              onChange={() => {
                dispatch(changeSexeUser('Femme'));
              }}
            />
          </Form.Field>
          <Form.Field className="filter-option">
            <Checkbox
              radio
              label="Autre"
              name="checkboxRadioGroup"
              value="Autre"
              checked={gender === 'Autre'}
              onChange={() => {
                dispatch(changeSexeUser('Autre'));
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
