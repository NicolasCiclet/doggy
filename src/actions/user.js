// I create const, it's better for autocompletion
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const ADD_LATLNG_NEW_USER = 'ADD_LATLNG_NEW_USER';
export const ADD_LASTNAME_NEW_USER = 'ADD_LASTNAME_NEW_USER';
export const ADD_FIRSTNAME_NEW_USER = 'ADD_FIRSTNAME_NEW_USER';
export const ADD_CITY_NEW_USER = 'ADD_CITY_NEW_USER';
export const ADD_USERNAME_NEW_USER = 'ADD_USERNAME_NEW_USER';
export const ADD_PASSWORD_NEW_USER = 'ADD_PASSWORD_NEW_USER';
export const ADD_GENDER_NEW_USER = 'ADD_GENDER_NEW_USER';
export const ADD_BIRTH_NEW_USER = 'ADD_BIRTH_NEW_USER';
export const ADD_BIO_NEW_USER = 'ADD_BIO_NEW_USER';
export const ADD_MAIL_NEW_USER = 'ADD_MAIL_NEW_USER';
export const MAIL_CHECKED = 'MAIL_CHECKED';
// change of one of the fields of the connection form
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_NICKNAME = 'SAVE_NICKNAME';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';

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

export const mailChecked = (value) => ({
  type: MAIL_CHECKED,
  newValue: value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveNickname = (nickname) => ({
  type: SAVE_NICKNAME,
  nickname: nickname,
});

export const updateSettingsField = (identifier, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  identifier: identifier,
  value: newValue,
});
