// I create const, it's better for autocompletion
export const ADD_INFO_NEW_USER = 'ADD_INFO_NEW_USER';

export const addInfoNewUser = (name, city) => ({
  type: ADD_INFO_NEW_USER,
  name: name,
  city: city,
});
