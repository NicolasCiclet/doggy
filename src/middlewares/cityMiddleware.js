import axios from 'axios';
import { GET_CITY_API } from '../actions/city';

// API Key
const APIkey = 'lnxoBaBa1sbt/fQXBRsqqQ==w2DBgrQ5Mka1ykiE';

const cityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CITY_API:
      // console.log('il faut faire appel à l API Ninja');

      // I send the request
      axios.get(
        'https://api.api-ninjas.com/v1/geocoding?city=Annecy&country=France',
        {
          headers: { 'X-Api-Key': APIkey },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response.data);
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error);
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
