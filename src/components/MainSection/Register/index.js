import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Message, Select, TextArea } from 'semantic-ui-react';
import { validate } from 'react-email-validator';
import { getCityApi } from '../../../actions/city';
import { addBioNewUser, addBirthNewUser, addCityNewUser, addFirstnameNewUser, addGenderNewUser, addLastnameNewUser, addMailNewUser, addPasswordNewUser, addUsernameNewUser, mailChecked } from '../../../actions/user';
import './register.scss';

const genderOptions = [
  { text: 'Homme', value: 'male' },
  { text: 'Femme', value: 'female' },
];

const personnalityOptions = [
  { text: 'A remplir...', value: 'todo' },
  { text: 'A remplir...', value: 'todo1' },
  { text: 'A remplir...', value: 'todo2' },
];

const sterilizedOptions = [
  { text: 'Oui', value: 'yes' },
  { text: 'Non', value: 'no' },
];

const Register = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.lastnameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  const checkMail = useSelector((state) => state.user.mailNewUser);
  const mailCheckedBool = useSelector((state) => state.user.mailChecked);

  validate(checkMail);
  // console.log(validate(checkMail));

  return (
    <>
      <div className="register">
        <h1>Création de compte</h1>

        {!userCreate && (
        <Form onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit !');
          if (validate(checkMail)) {
            dispatch(getCityApi());
          }
          else {
            dispatch(mailChecked(false));
          }
        }}
        >
          <Form.Group widths="equal">
            <Form.Input
              label="Nom"
              placeholder="Nom"
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Prénom"
              placeholder="Prénom"
              width={5}
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Ville"
              placeholder="Ville"
              width={5}
              onChange={(event) => {
                dispatch(addCityNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Nom d'utilisateur"
              placeholder="Nom d'utilisateur"
              width={8}
              onChange={(event) => {
                dispatch(addUsernameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Email"
              placeholder="joe@schmoe.com"
              width={8}
              // error={mailCheckedBool ? false : true}
              error={mailCheckedBool ? false : {
                content: 'Please enter a valid email address',
                pointing: 'below',
              }}
              onChange={(event) => {
                dispatch(addMailNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Mot de passe"
              placeholder="Mot de passe"
              width={8}
              type="password"
              onChange={(event) => {
                dispatch(addPasswordNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Confirmation Mot de passe"
              placeholder="Confirmez votre mot de passe"
              width={8}
              type="password"
              // onChange={(event) => {
              //   dispatch(addPasswordNewUser(event.target.value));
              // }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              control={Select}
              options={genderOptions}
              label="Genre"
              placeholder="Genre"
              width={8}
              // search
              // searchInput={{ id: 'form-select-control-gender' }}
              // Find solution here https://stackoverflow.com/questions/68496963/how-to-passe-value-from-dropdown-made-by-semantic-ui-in-react
              onChange={(event, result) => {
                // console.log(result.value);
                dispatch(addGenderNewUser(result.value));
              }}
            />
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
              width={8}
              type="date"
              onChange={(event) => {
                dispatch(addBirthNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Input
            label="Un petit mot sur vous..."
            control={TextArea}
            placeholder="Un petit mot sur vous..."
            onChange={(event) => {
              dispatch(addBioNewUser(event.target.value));
            }}
          />

          <h1>Mon toutou</h1>

          <Form.Group widths="equal">
            <Form.Input
              label="Nom"
              placeholder="Nom"
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Race"
              placeholder="Race"
              width={5}
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              control={Select}
              options={personnalityOptions}
              label="Personnalité"
              placeholder="Personnalité"
              width={8}
              search
              // searchInput={{ id: 'form-select-control-gender' }}
              // onChange={(event) => {
              //   console.log(event);
              //   dispatch(addGenderNewUser(event.target.value));
              // }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Genre"
              placeholder="Genre"
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
              width={8}
              type="date"
              onChange={(event) => {
                dispatch(addBirthNewUser(event.target.value));
              }}
            />
            <Form.Input
              control={Select}
              options={sterilizedOptions}
              label="Stérilisé ?"
              placeholder="Stérilisé"
              width={8}
              search
              // searchInput={{ id: 'form-select-control-gender' }}
              // onChange={(event) => {
              //   console.log(event);
              //   dispatch(addGenderNewUser(event.target.value));
              // }}
            />
          </Form.Group>

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
