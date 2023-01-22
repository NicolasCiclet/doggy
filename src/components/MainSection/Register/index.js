import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Message, Select, TextArea } from 'semantic-ui-react';
import { getCityApi } from '../../../actions/city';
import { addBioNewUser, addBirthNewUser, addCityNewUser, addFirstnameNewUser, addLastnameNewUser, addMailNewUser, addPasswordNewUser, addUsernameNewUser, mailChecked } from '../../../actions/user';
import './register.scss';

const genderOptions = [
  { key: 'h', text: 'Homme', value: 'male' },
  { key: 'f', text: 'Femme', value: 'female' },
];

const Register = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.lastnameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  const checkMail = useSelector((state) => state.user.mailNewUser);
  const mailCheckedBool = useSelector((state) => state.user.mailChecked);

  const emailCheckRegex = require('react-email-validator');
  emailCheckRegex.validate(checkMail);
  // console.log(emailCheckRegex.validate(checkMail));

  return (
    <>
      <div className="register">
        <h1>Création de compte</h1>

        {!userCreate && (
        <Form onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit !');
          if (emailCheckRegex.validate(checkMail)) {
            dispatch(getCityApi());
          }
          else {
            dispatch(mailChecked(false));
          }
        }}
        >
          <Form.Group widths="equal">
            <Form.Input
              placeholder="Nom"
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              placeholder="Prénom"
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              placeholder="Ville"
              onChange={(event) => {
                dispatch(addCityNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Input
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              dispatch(addUsernameNewUser(event.target.value));
            }}
          />
          <Form.Input
            placeholder="Mot de passe"
            type="password"
            onChange={(event) => {
              dispatch(addPasswordNewUser(event.target.value));
            }}
          />
          <Form.Input
            control={Select}
            options={genderOptions}
            placeholder="Gender"
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          <Form.Input
            placeholder="Date de naissance"
            type="date"
            onChange={(event) => {
              dispatch(addBirthNewUser(event.target.value));
            }}
          />

          <Form.Input
            control={TextArea}
            placeholder="Un petit mot sur vous..."
            onChange={(event) => {
              dispatch(addBioNewUser(event.target.value));
            }}
          />
          <Form.Input
            label="Email"
            placeholder="joe@schmoe.com"
            // error={mailCheckedBool ? false : true}
            error={mailCheckedBool ? false : {
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
            onChange={(event) => {
              dispatch(addMailNewUser(event.target.value));
            }}
          />

          <Form.Input
            control={Button}
            content="Confirm"
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
