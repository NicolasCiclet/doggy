// I create const, it's better for autocompletion
export const GET_CITY_API = 'GET_CITY_API';
export const ADD_CITY_API = 'ADD_CITY_API';
export const UPDATE_CITY_API = 'UPDATE_CITY_API';

// action to call api
export const getCityApi = () => ({
  type: GET_CITY_API,
});

// action that receives the data api
export const addCityApi = (lat, lng) => ({
  type: ADD_CITY_API,
  latValue: lat,
  lngValue: lng,
});

// action to call api for update profile
export const updateCityApi = () => ({
  type: UPDATE_CITY_API,
});
