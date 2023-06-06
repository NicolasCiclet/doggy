import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Select, TextArea, Icon,
} from 'semantic-ui-react';
import { validate } from 'react-email-validator';
import { getCityApi } from '../../actions/city';
import {
  addBioNewUser, addBirthNewUser, addCityNewUser, addFirstnameNewUser,
  addGenderNewUser, addLastnameNewUser, addMailNewUser, addPasswordNewUser,
  addPhoneNewUser, addUsernameNewUser, checkedPasswordNewUser, resetUserValue,
} from '../../actions/user';
import './register.scss';

// options for the input select gender
const genderOptions = [
  { text: 'Femme', value: 'Femme' },
  { text: 'Homme', value: 'Homme' },
  { text: 'Autre', value: 'Autre' },
];

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCreate = useSelector((state) => state.user.userCreate);
  const mailUser = useSelector((state) => state.user.mailNewUser);
  // const nickenameUser = useSelector((state) => state.user.usernameNewUser);
  const passwordUser = useSelector((state) => state.user.passwordNewUser);
  const checkedPasswordUser = useSelector((state) => state.user.checkedPasswordNewUser);
  const cityFind = useSelector((state) => state.user.isCityFind);

  useEffect(() => {
    if (userCreate) {
      navigate('/');
    }
  }, [userCreate]);

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

  const handleFormSubmit = () => {
    // OnSubmit, mail and password are checked with an and condition.
    // Only if the condition is true, we send a request to the api
    if ((validate(mailUser)) && (passwordRegex.test(passwordUser))) {
      dispatch(getCityApi());
    }
  };

  return (
    <>
      {/* the form is visible only if userCreate is false */}
      {!userCreate && (
      <div className="register">
        <h1>Création de compte</h1>

        <Form>

          {/* with Form.group we have input on the same line or 1 input by line with responsive */}
          <Form.Group widths="equal">
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              onChange={(event) => {
                dispatch(addLastnameNewUser(event.target.value));
              }}
            />
            <Form.Input
              required
              label="Prénom"
              placeholder="Prénom"
              onChange={(event) => {
                dispatch(addFirstnameNewUser(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              required
              label="Nom d'utilisateur"
              placeholder="Nom d'utilisateur"
              onChange={(event) => {
                dispatch(addUsernameNewUser(event.target.value));
              }}
            />
            <Form.Input
              required
              label="Ville"
              placeholder="Ville"
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
              required
              label="Email"
              placeholder="tobby@doggy.fr"
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
              placeholder="Téléphone"
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
              required
              label="Mot de passe"
              placeholder="Mot de passe"
              type="password"
              error={(passwordRegex.test(passwordUser)) ? false : {
                content: '6 caractères minimum dont 1 minuscule, 1 majuscule et 1 chiffre',
              }}
              onChange={(event) => {
                dispatch(addPasswordNewUser(event.target.value));
              }}
            />
            <Form.Input
              required
              label="Confirmation Mot de passe"
              placeholder="Confirmez votre mot de passe"
              type="password"
              error={(checkedPasswordUser === passwordUser) ? false : {
                content: 'Vérifiez votre mot de passe',
              }}
              onChange={(event) => {
                dispatch(checkedPasswordNewUser(event.target.value));
              }}
            />
          </Form.Group>
          {/* <Form.Input
            label="Photo"
            // placeholder="Photo"
            width={7}
            type="file"
            onChange={(event) => {
              dispatch(addPictureNewUser(event.target.files[0]));
              console.log(event.target.files[0]);
            }}
          /> */}
          <Form.Group widths="equal">
            <Form.Input
              control={Select}
              options={genderOptions}
              label="Genre"
              placeholder="Genre"
              // Find solution here https://stackoverflow.com/questions/68496963/how-to-passe-value-from-dropdown-made-by-semantic-ui-in-react
              onChange={(event, result) => {
                // console.log(result.value);
                dispatch(addGenderNewUser(result.value));
              }}
            />
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
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
          <Form.Checkbox label="J'accepte les termes et conditions" />
          <Button control={Button} animated="fade" onClick={handleFormSubmit}>
            <Button.Content visible>Valider</Button.Content>
            <Button.Content hidden>Valider</Button.Content>
          </Button>
          <Button
            animated
            color="red"
            onClick={() => {
              window.history.back();
              dispatch(resetUserValue());
            }}
          >
            {/* // cancel button and return to previous page */}
            <Button.Content visible>Annuler</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Form>

      </div>
      )}
    </>
  );
};

export default UserRegister;
