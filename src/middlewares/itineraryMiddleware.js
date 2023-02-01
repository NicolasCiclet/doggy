import axios from 'axios';
import { GET_ALL_ITINERARIES, stockAllItineraries } from '../actions/itinerary';

const itineraryMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case GET_ALL_ITINERARIES:

      axios.get(
        `${url}api/itineraries/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data.results);
          console.log('all events recup');
          const allItineraries = response.data.results;
          store.dispatch(stockAllItineraries(allItineraries));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
  }

  next(action);
};

export default itineraryMiddleware;
