export const GET_CITY_API = 'GET_CITY_API';
export const ADD_CITY_API = 'ADD_CITY_API';

export const getCityApi = () => ({
  type: GET_CITY_API,
});
export const addCityApi = (lat, lng) => ({
  type: ADD_CITY_API,
  latValue: lat,
  lngValue: lng,
});
