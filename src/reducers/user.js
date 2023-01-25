import users from 'src/data/userForTest';
import { SHOW_LINK, SAVE_AUTH_DATA, ADD_BIO_NEW_USER, ADD_BIRTH_NEW_USER, ADD_CITY_NEW_USER, ADD_FIRSTNAME_NEW_USER, ADD_GENDER_NEW_USER, ADD_LASTNAME_NEW_USER, ADD_LATLNG_NEW_USER, ADD_MAIL_NEW_USER, ADD_NEW_USER, ADD_PASSWORD_NEW_USER, ADD_PHONE_NEW_USER, ADD_USERNAME_NEW_USER, MAIL_CHECKED, UPDATE_SETTINGS_FIELD, CITY_FIND, LOGOUT } from '../actions/user';

const initialState = {
  usersToDisplay: users,
  lastnameNewUser: '',
  firstnameNewUser: '',
  cityNewUser: '',
  usernameNewUser: '',
  passwordNewUser: '',
  genderNewUser: '',
  birthNewUser: '',
  bioNewUser: '',
  mailNewUser: '',
  phoneNewUser: '',
  latNewUser: '',
  lngNewUser: '',
  isCityFind: true,
  userCreate: false,

  token: '',
  logged: true,

  // pour afficher ou non le menu burger de la page profil
  showLink: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LASTNAME_NEW_USER:
      return {
        ...state,
        lastnameNewUser: action.newValue,
      };

    case ADD_FIRSTNAME_NEW_USER:
      return {
        ...state,
        firstnameNewUser: action.newValue,
      };

    case ADD_CITY_NEW_USER:
      return {
        ...state,
        cityNewUser: action.newValue,
      };

    case ADD_USERNAME_NEW_USER:
      return {
        ...state,
        usernameNewUser: action.newValue,
      };

    case ADD_PASSWORD_NEW_USER:
      return {
        ...state,
        passwordNewUser: action.newValue,
      };

    case ADD_GENDER_NEW_USER:
      return {
        ...state,
        genderNewUser: action.newValue,
      };

    case ADD_BIRTH_NEW_USER:
      return {
        ...state,
        birthNewUser: action.newValue,
      };

    case ADD_BIO_NEW_USER:
      return {
        ...state,
        bioNewUser: action.newValue,
      };

    case ADD_MAIL_NEW_USER:
      return {
        ...state,
        mailNewUser: action.newValue,
      };

    case ADD_PHONE_NEW_USER:
      return {
        ...state,
        phoneNewUser: action.newValue,
      };

    case CITY_FIND:
      return {
        ...state,
        isCityFind: action.newValue,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        userCreate: !state.userCreate,
      };

    case ADD_LATLNG_NEW_USER:
      return {
        ...state,
        latNewUser: action.newLat,
        lngNewUser: action.newLng,
      };

    case SAVE_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        // on passe en status connecté
        logged: true,
        // sécurité : on efface les identifiants dans le state dès qu'on n'en a plus besoin
        mailNewuser: '',
        passwordNewUser: '',
      };

    case UPDATE_SETTINGS_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          mailNewUser: action.value,
        };
      }
      // si on arrive à cette ligne, c'est que forcément on n'est pas passé dans le if
      // => else implicite si on a un return dans le if
      return {
        ...state,
        passwordNewUser: action.value,
      };

    case LOGOUT:
      return {
        ...state,
        logged: !state.logged,
      };

    // Pour afficher le menu burger dans le page profil
    case SHOW_LINK:
      // on retourne un nouveau state dans lequel on a changé la valeur de inputMessage
      return {
        ...state,
        // modification(s) d'info(s) du state, ici on va chercher dans le payload de l'action
        showLink: !state.showLink,
      };

    default:
      return state;
  }
};

export default userReducer;
