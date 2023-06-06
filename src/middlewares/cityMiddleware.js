import axios from 'axios';
import { UPDATE_CITY_API, GET_CITY_API } from '../actions/city';
import {
  addLatlngNewUser, cityFind, submitFormNewUser, submitFormUpdateUser,
} from '../actions/user';

// API Key
// Clef API de Marine
// const APIkey = 'lnxoBaBa1sbt/fQXBRsqqQ==w2DBgrQ5Mka1ykiE';
// Clef API de Nico
const APIkey = 'P6LZJ0byeAIlu7MHoyCptQ==vWW1G3Q1v3pVJqtX';
const cityMiddleware = (store) => (next) => (action) => {
  const city = store.getState().user.cityNewUser;

  switch (action.type) {
    case GET_CITY_API:
      console.log('appel à l API City');

      // I send the request
      axios.get(
        `https://api.api-ninjas.com/v1/city?name=${city}&country=FR`,
        {
          headers: { 'X-Api-Key': APIkey },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log('ville ok');
          const lat = (response.data[0].latitude);
          const lng = (response.data[0].longitude);
          store.dispatch(addLatlngNewUser(lat, lng));
          store.dispatch(submitFormNewUser());
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error, "la ville n'existe pas");
          store.dispatch(cityFind(false));
        })

      // to do in any case
        .finally(() => {
        });

      break;

    // the same action that GET_CITY_API but call action submitFormUpdateUser avec un requete PUT
    case UPDATE_CITY_API:
      console.log('appel à l API City');
      console.log(APIkey);

      // I send the request
      axios.get(
        `https://api.api-ninjas.com/v1/city?name=${city}&country=FR`,
        {
          headers: { 'X-Api-Key': APIkey },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log('ville ok');
          const lat = (response.data[0].latitude);
          const lng = (response.data[0].longitude);
          store.dispatch(addLatlngNewUser(lat, lng));
          store.dispatch(submitFormUpdateUser());
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error, "la ville n'existe pas");
          store.dispatch(cityFind(false));
        })

      // to do in any case
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};
export default cityMiddleware;
