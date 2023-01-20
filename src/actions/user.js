// I create const, it's better for autocompletion
export const ADD_NAME_NEW_USER = 'ADD_NAME_NEW_USER';
export const ADD_CITY_NEW_USER = 'ADD_CITY_NEW_USER';
export const ADD_NEW_USER = 'ADD_NEW_USER';

export const addNameNewUser = (name) => ({
  type: ADD_NAME_NEW_USER,
  name: name,
});

export const addCityNewUser = (city) => ({
  type: ADD_CITY_NEW_USER,
  city: city,
});

export const addNewUser = () => ({
  type: ADD_NEW_USER,
});
