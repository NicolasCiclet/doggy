import users from 'src/data/userForTest';
import { ADD_BIO_NEW_USER, ADD_BIRTH_NEW_USER, ADD_CITY_NEW_USER, ADD_FIRSTNAME_NEW_USER, ADD_GENDER_NEW_USER, ADD_LASTNAME_NEW_USER, ADD_LATLNG_NEW_USER, ADD_MAIL_NEW_USER, ADD_NEW_USER, ADD_PASSWORD_NEW_USER, ADD_PHONE_NEW_USER, ADD_USERNAME_NEW_USER, MAIL_CHECKED } from '../actions/user';

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

    case ADD_PHONE_NEW_USER:
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

    default:
      return state;
  }
};

export default userReducer;
