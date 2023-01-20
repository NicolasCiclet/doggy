import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Message, Select, TextArea } from 'semantic-ui-react';
import { addBioNewUser, addBirthNewUser, addCityNewUser, addFirstnameNewUser, addLastnameNewUser, addMailNewUser, addNewUser, addPasswordNewUser, addUsernameNewUser } from '../../../actions/user';
import './register.scss';

const genderOptions = [
  { key: 'h', text: 'Homme', value: 'male' },
  { key: 'f', text: 'Femme', value: 'female' },
];

const Register = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.lastnameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);

  return (
    <>
      <div className="register">
        <h1>Création de compte</h1>

        {!userCreate && (
        <Form onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit !');
          dispatch(addNewUser());
        }}
        >
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              placeholder="Nom"
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Field
              control={Input}
              placeholder="Prénom"
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
            <Form.Field
              control={Input}
              placeholder="Ville"
              onChange={(event) => {
                dispatch(addCityNewUser(event.target.value));
              }}
            />
            <Form.Field
              control={Input}
              placeholder="Nom d'utilisateur"
              onChange={(event) => {
                dispatch(addUsernameNewUser(event.target.value));
              }}
            /><Form.Field
              control={Input}
              placeholder="Mot de passe"
              type="password"
              onChange={(event) => {
                dispatch(addPasswordNewUser(event.target.value));
              }}
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              placeholder="Gender"
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />
            <Form.Field
              control={Input}
              placeholder="Date de naissance"
              type="date"
              onChange={(event) => {
                dispatch(addBirthNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            placeholder="Un petit mot sur vous..."
            onChange={(event) => {
              dispatch(addBioNewUser(event.target.value));
            }}
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
            onChange={(event) => {
              dispatch(addMailNewUser(event.target.value));
            }}
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
          />
        </Form>
        )}
      </div>

      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header="Inscription réussi"
            content={`Bienvenue ${name}`}
          />
        </Form>
      )}
    </>
  );
};

export default Register;
