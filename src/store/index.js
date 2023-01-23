import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import cityMiddleware from '../middlewares/cityMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

// il nous faut un outil plus puissant qui permet de combiner les dev tools
// avec autre chose (ici avec des middlewares)
const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    cityMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
