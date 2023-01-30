import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Button, Form, Message, Select, TextArea,
} from 'semantic-ui-react';
import { validate } from 'react-email-validator';
import { updateCityApi } from '../../actions/city';
import {
  addBioNewUser, addBirthNewUser, addCityNewUser, addFirstnameNewUser,
  addGenderNewUser, addLastnameNewUser, addMailNewUser, addPasswordNewUser,
  addPhoneNewUser, addPictureNewUser, addUsernameNewUser, checkedPasswordNewUser,
} from '../../actions/user';
import './register.scss';

// options for the input select gender
const genderOptions = [
  { text: 'Homme', value: 'male' },
  { text: 'Femme', value: 'female' },
];

const UpdateUser = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  const name = useSelector((state) => state.user.usernameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  const mailUser = useSelector((state) => state.user.mailNewUser);
  const passwordUser = useSelector((state) => state.user.passwordNewUser);
  const checkedPasswordUser = useSelector((state) => state.user.checkedPasswordNewUser);
  const cityFind = useSelector((state) => state.user.isCityFind);

  // To get connected user infos that are save in the state
  const lastname = useSelector((state) => state.user.lastnameNewUser);
  const firstname = useSelector((state) => state.user.firstnameNewUser);
  const city = useSelector((state) => state.user.cityNewUser);
  const nickname = useSelector((state) => state.user.usernameNewUser);
  const birthdate = useSelector((state) => state.user.birthNewUser);
  const bio = useSelector((state) => state.user.bioNewUser);
  const mail = useSelector((state) => state.user.mailNewUser);
  const phone = useSelector((state) => state.user.phoneNewUser);

  /* I use regex to check password, here is an explication of my rules :
  ^ The password string will start this way and must contain :
  (?=.*[a-z]) at least 1 lowercase alphabetical character
  (?=.*[A-Z]) at least 1 uppercase alphabetical character
  (?=.*[0-9]) at least 1 numeric character
  (?=.{6,}) 6 characters or longer
  */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

  // Validate is come from react-email-validator and use a regex to check mail.
  validate(mailUser);
  // console.log(validate(mailUser));

  return (
    <>
      {/* the form is visible only if userCreate is false */}
      {!userCreate && (
      <div className="register">
        <h1>Mise à jour du profil</h1>

        <Form onSubmit={(event) => {
          event.preventDefault();

          // OnSubmit, mail and password are checked with an and condition.
          // Only if the condition is true, we send a request to the api
          if ((validate(mailUser)) && (passwordRegex.test(passwordUser))) {
            dispatch(updateCityApi());
          }
        }}
        >
          {/* with Form.group we have input on the same line or 1 input by line with responsive */}
          <Form.Group widths="equal">
            <Form.Input
              label="Nom"
              placeholder={lastname}
              // width={5}
              onChange={(event) => {
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Prénom"
              placeholder={firstname}
              // width={5}
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Ville"
              placeholder={city}
              // width={5}
              error={cityFind ? false : {
                content: 'Ville introuvable, merci d\'indiquer une autre ville',
              }}
              onChange={(event) => {
                dispatch(addCityNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Nom d'utilisateur"
              placeholder={nickname}
              width={5}
              onChange={(event) => {
                dispatch(addUsernameNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Email"
              placeholder={mail}
              width={6}
              // I use a ternary condition to show or hide the error message
              error={validate(mailUser) ? false : {
                content: 'Merci d\'entrer un email valide',
              }}
              onChange={(event) => {
                dispatch(addMailNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Téléphone"
              placeholder={phone}
              width={5}
              // Only numbers are allowed
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
                dispatch(addPhoneNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Nouveau mot de passe"
              placeholder="Mot de passe"
              width={4}
              type="password"
              error={(passwordRegex.test(passwordUser)) ? false : {
                content: '6 caractères minimum dont 1 minuscule, 1 majuscule et 1 chiffre',
              }}
              onChange={(event) => {
                dispatch(addPasswordNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Confirmation Mot de passe"
              placeholder="Confirmez votre mot de passe"
              width={4}
              type="password"
              error={(checkedPasswordUser === passwordUser) ? false : {
                content: 'Vérifiez votre mot de passe',
              }}
              onChange={(event) => {
                dispatch(checkedPasswordNewUser(event.target.value));
              }}
            />
            <Form.Input
              label="Photo"
              // placeholder="Photo"
              width={7}
              type="file"
              onChange={(event) => {
                dispatch(addPictureNewUser(event.target.files[0]));
                console.log(event.target.files[0]);
              }}
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
              placeholder={birthdate}
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
            placeholder={bio}
            onChange={(event) => {
              dispatch(addBioNewUser(event.target.value));
            }}
          />

          <Form.Input
            control={Button}
            content="Valider"
          />
        </Form>

      </div>
      )}

      {/* success message when userCreate is true */}
      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header="Inscription réussi"
            content={`Bienvenue ${name}`}
            // // {setTimeout(<Navigate to="/error" replace={true} />, 3000)}
            // {/* <Navigate to="/error" replace={true} /> */}
          />
        </Form>
      )}
    </>
  );
};

export default UpdateUser;