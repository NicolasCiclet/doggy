// I create const, it's better for autocompletion
// USER
// add all information of user in the state
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const ADD_LATLNG_NEW_USER = 'ADD_LATLNG_NEW_USER';
export const ADD_LASTNAME_NEW_USER = 'ADD_LASTNAME_NEW_USER';
export const ADD_FIRSTNAME_NEW_USER = 'ADD_FIRSTNAME_NEW_USER';
export const ADD_CITY_NEW_USER = 'ADD_CITY_NEW_USER';
export const ADD_USERNAME_NEW_USER = 'ADD_USERNAME_NEW_USER';
export const ADD_PASSWORD_NEW_USER = 'ADD_PASSWORD_NEW_USER';
export const ADD_CHECKED_PASSWORD_NEW_USER = 'ADD_CHECKED_PASSWORD_NEW_USER';
export const ADD_GENDER_NEW_USER = 'ADD_GENDER_NEW_USER';
export const ADD_BIRTH_NEW_USER = 'ADD_BIRTH_NEW_USER';
export const ADD_BIO_NEW_USER = 'ADD_BIO_NEW_USER';
export const ADD_MAIL_NEW_USER = 'ADD_MAIL_NEW_USER';
export const ADD_PHONE_NEW_USER = 'ADD_PHONE_NEW_USER';
export const ADD_PICTURE_NEW_USER = 'ADD_PICTURE_NEW_USER';
export const CITY_FIND = 'CITY_FIND';
// change of one of the fields of the connection form
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_FORM_NEW_USER = 'SUBMIT_FORM_NEW_USER';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
// save in the state the autenticate informations
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
// Pour afficher le menu burger de la page profil
export const SHOW_LINK = 'SHOW_LINK';
// Pour afficher la pop-up delete
export const SHOW_DELETE_USER = 'SHOW_DELETE_USER';
// To delete a user
export const DELETE_USER = 'DELETE_USER';
// To update user profile with PUT request
export const SUBMIT_FORM_UPDATE_USER = 'SUBMIT_FORM_UPDATE_USER';
// To get connected user information in the BDD
export const GET_USER_INFO = 'GET_USER_INFO';

// To get RANDOM user information for carousel, from api back
export const GET_RANDOM_USER_INFO = 'GET_RANDOM_USER_INFO';
// To put RANDOM user information for carousel, in state
export const DISPLAY_RANDOM_USER_INFO = 'DISPLAY_RANDOM_USER_INFO';

// To stock in the state the connected user info
export const DISPLAY_INFO_CONNECTED_USER = 'DISPLAY_INFO_CONNECTED_USER';
// To change display message form
export const IS_MESS_FORM_OPENED = 'IS_MESS_FORM_OPENED';
export const IS_REP_FORM_OPENED = 'IS_REP_FORM_OPENED';

// action to get all users of the BDD
export const GET_ALL_USERS = 'GET_ALL_USERS';
// action to stock the users in the state
export const STOCK_USERS = 'STOCK_USERS';

// stock the id of the watched user
export const STOCK_ID_WATCHED_USER = 'STOCK_ID_WATCHED_USER';

// To change display LOADER
export const DISPLAY_LOADER = 'DISPLAY_LOADER';

// To show or hide error message connexion
export const ERROR_CONNEXION = 'ERROR_CONNEXION';

// When user profil is deleted
export const USER_DELETED = 'USER_DELETED';

// To change the value of user gender in the state
export const CHANGE_SEXE_USER = 'CHANGE_SEXE_USER';

// To open the filter window
export const SHOW_USER_FILTER = 'SHOW_USER_FILTER';

export const UPDATE_UNREAD_MESSAGE = 'UPDATE_UNREAD_MESSAGE';
export const STOCK_UPDATE_UNREAD = 'STOCK_UPDATE_UNREAD';

// the last user
export const GET_LAST_USER = 'GET_LAST_USER';
export const STOCK_LAST_USER = 'STOCK_LAST_USER';

export const CONNEXION_FORM_RESET = 'CONNEXION_FORM_RESET';

// reset all user's values in state
export const RESET_USER_VALUE = 'RESET_USER_VALUE';

// User actions
export const addNewUser = () => ({
  type: ADD_NEW_USER,
});

export const addLatlngNewUser = (lat, lng) => ({
  type: ADD_LATLNG_NEW_USER,
  newLat: lat,
  newLng: lng,
});

export const addLastnameNewUser = (value) => ({
  type: ADD_LASTNAME_NEW_USER,
  newValue: value,
});

export const addFirstnameNewUser = (value) => ({
  type: ADD_FIRSTNAME_NEW_USER,
  newValue: value,
});

export const addCityNewUser = (value) => ({
  type: ADD_CITY_NEW_USER,
  newValue: value,
});
export const addUsernameNewUser = (value) => ({
  type: ADD_USERNAME_NEW_USER,
  newValue: value,
});
export const addPasswordNewUser = (value) => ({
  type: ADD_PASSWORD_NEW_USER,
  newValue: value,
});
export const checkedPasswordNewUser = (value) => ({
  type: ADD_CHECKED_PASSWORD_NEW_USER,
  newValue: value,
});
export const addGenderNewUser = (value) => ({
  type: ADD_GENDER_NEW_USER,
  newValue: value,
});
export const addBirthNewUser = (value) => ({
  type: ADD_BIRTH_NEW_USER,
  newValue: value,
});
export const addBioNewUser = (value) => ({
  type: ADD_BIO_NEW_USER,
  newValue: value,
});
export const addMailNewUser = (value) => ({
  type: ADD_MAIL_NEW_USER,
  newValue: value,
});

export const addPhoneNewUser = (value) => ({
  type: ADD_PHONE_NEW_USER,
  newValue: value,
});

export const addPictureNewUser = (value) => ({
  type: ADD_PICTURE_NEW_USER,
  newValue: value,
});

export const cityFind = (bool) => ({
  type: CITY_FIND,
  newValue: bool,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (token) => ({
  type: SAVE_AUTH_DATA,
  token: token,
});

export const updateSettingsField = (identifier, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  identifier: identifier,
  value: newValue,
});

export const submitFormNewUser = () => ({
  type: SUBMIT_FORM_NEW_USER,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const showLink = () => ({
  type: SHOW_LINK,
});

export const showDeleteUser = () => ({
  type: SHOW_DELETE_USER,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const submitFormUpdateUser = () => ({
  type: SUBMIT_FORM_UPDATE_USER,
});

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const getRandomUserInfo = () => ({
  type: GET_RANDOM_USER_INFO,
});

export const displayRandomUserInfo = (value) => ({
  type: DISPLAY_RANDOM_USER_INFO,
  value: value,
});

export const displayInfoConnectedUser = (
  bio,
  birthdate,
  city,
  email,
  firstname,
  gender,
  id,
  lastname,
  nickname,
  phone,
  picture,
  latitude,
  longitude,
  nbrAnimal,
  nbrUnreadMessage,
) => ({
  type: DISPLAY_INFO_CONNECTED_USER,
  bio: bio,
  birthdate: birthdate,
  city: city,
  email: email,
  firstname: firstname,
  gender: gender,
  id: id,
  lastname: lastname,
  nickname: nickname,
  phone: phone,
  picture: picture,
  latitude: latitude,
  longitude: longitude,
  nbrAnimal: nbrAnimal,
  nbrUnreadMessage: nbrUnreadMessage,
});

export const isMessFormOpened = () => ({
  type: IS_MESS_FORM_OPENED,
});

export const isRepFormOpened = (index, bool) => ({
  type: IS_REP_FORM_OPENED,
  payload: { index, bool },
});

export const displayLoader = (bool) => ({
  type: DISPLAY_LOADER,
  value: bool,
});

export const getAllusers = () => ({
  type: GET_ALL_USERS,
});

export const stockUsers = (users) => ({
  type: STOCK_USERS,
  users: users,
});

export const stockIdWatchedUser = (id) => ({
  type: STOCK_ID_WATCHED_USER,
  id: id,
});

export const errorConnexion = () => ({
  type: ERROR_CONNEXION,
});

export const userDeleted = () => ({
  type: USER_DELETED,
});

export const changeSexeUser = (gender) => ({
  type: CHANGE_SEXE_USER,
  gender: gender,
});

export const showUserFilter = () => ({
  type: SHOW_USER_FILTER,
});

// call back to have the number of unread messages
export const updateUnreadMessage = () => ({
  type: UPDATE_UNREAD_MESSAGE,
});
// update of the number of unread messages on state
export const stockupdateUnread = (newValue) => ({
  type: STOCK_UPDATE_UNREAD,
  value: newValue,
});

// the last user
export const getLastUser = () => ({
  type: GET_LAST_USER,
});

export const stockLastUser = (newValue) => ({
  type: STOCK_LAST_USER,
  value: newValue,
});

export const connexionFormReset = () => ({
  type: CONNEXION_FORM_RESET,
});

// reset all user's values in state
export const resetUserValue = () => ({
  type: RESET_USER_VALUE,
});
