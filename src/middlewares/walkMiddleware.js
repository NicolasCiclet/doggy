import axios from 'axios';
import { GET_ALL_WALK, stockAllWalk } from '../actions/walk';

const walkMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case GET_ALL_WALK:
      console.log('appel api back itineraires');

      // I send the request
      axios.get(
        `${url}api/itineraries`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response.data.results);
          console.log('walks ok');
          store.dispatch(stockAllWalk(response.data.results));
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error, 'pas de walk');
        })

      // to do in any case
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};

export default walkMiddleware;
