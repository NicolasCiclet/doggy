import axios from 'axios';
import { GET_CITY_API } from '../actions/city';

const APIkey = 'lnxoBaBa1sbt/fQXBRsqqQ==w2DBgrQ5Mka1ykiE';

const cityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CITY_API:
      // console.log('il faut faire appel à l API Ninja');

      axios.get(
        'https://api.api-ninjas.com/v1/geocoding?city=London&country=England',
        {
          headers: { 'X-Api-Key': APIkey },
        },
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};
export default cityMiddleware;
