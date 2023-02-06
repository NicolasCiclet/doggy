import axios from 'axios';
import {
  GET_ALL_CATEGORIES, GET_ALL_PRO, stockAllCategories, stockAllPro,
} from '../actions/pro';
import { displayLoader } from '../actions/user';

const proMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case GET_ALL_PRO:
      // console.log('il faut faire appel à l API Ninja');
      store.dispatch(displayLoader(true));

      // I send the request
      axios.get(
        `${url}api/professionals`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response.data.results);
          console.log('professionals ok');
          store.dispatch(displayLoader(false));
          store.dispatch(stockAllPro(response.data.results));
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error, 'pas de pro');
          store.dispatch(displayLoader(false));
        })

      // to do in any case
        .finally(() => {
        });

      break;

    case GET_ALL_CATEGORIES:
      console.log('on va chercher les categories');

      // I send the request
      axios.get(
        `${url}api/category/filter/professional`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response.data.results);
          console.log('on recois les categories ok');
          store.dispatch(stockAllCategories(response.data.results));
        })

      // What to do in case of error
        .catch((error) => {
          console.log(error, 'pas de pro');
        })

      // to do in any case
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};

export default proMiddleware;
