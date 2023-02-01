import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import cityMiddleware from '../middlewares/cityMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import eventMiddleware from '../middlewares/eventMiddleware';
import dogMiddleware from '../middlewares/dogMiddleware';
import proMiddleware from '../middlewares/proMiddleware';
import walkMiddleware from '../middlewares/walkMiddleware';

// il nous faut un outil plus puissant qui permet de combiner les dev tools
// avec autre chose (ici avec des middlewares)
const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    cityMiddleware,
    eventMiddleware,
    dogMiddleware,
    proMiddleware,
    walkMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
