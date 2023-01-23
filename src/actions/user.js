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
