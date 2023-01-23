import users from 'src/data/userForTest';
import {
  SAVE_NICKNAME, ADD_BIO_NEW_USER, ADD_BIRTH_NEW_USER, ADD_CITY_NEW_USER, ADD_FIRSTNAME_NEW_USER,
  ADD_GENDER_NEW_USER, ADD_LASTNAME_NEW_USER, ADD_LATLNG_NEW_USER, ADD_MAIL_NEW_USER, ADD_NEW_USER,
  ADD_PASSWORD_NEW_USER, ADD_USERNAME_NEW_USER, MAIL_CHECKED, UPDATE_SETTINGS_FIELD,
} from '../actions/user';

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
  latNewUser: '',
  lngNewUser: '',
  userCreate: false,
  mailChecked: true,
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

    case MAIL_CHECKED:
      return {
        ...state,
        mailChecked: action.newValue,
      };

    case SAVE_NICKNAME:
      return {
        ...state,
        usernameNewUser: action.nickname,
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

    default:
      return state;
  }
};

export default userReducer;
