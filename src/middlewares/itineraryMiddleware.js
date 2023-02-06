import axios from 'axios';
import { GET_ALL_ITINERARIES, stockAllItineraries } from '../actions/itinerary';
import { displayLoader } from '../actions/user';

const itineraryMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case GET_ALL_ITINERARIES:
      // console.log('appel api back itineraires');
      store.dispatch(displayLoader(true));

      // I send the request
      axios.get(
        `${url}api/itineraries/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          store.dispatch(displayLoader(false));
          // console.log(response.data.results);
          // console.log('all itineraries recup');
          const allItineraries = response.data.results;
          store.dispatch(stockAllItineraries(allItineraries));
        })
        // What to do in case of error
        .catch((error) => {
          store.dispatch(displayLoader(false));
          console.log(error);
          console.log('itineraire non trouvé');
        })

        // to do in any case
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};

export default itineraryMiddleware;
