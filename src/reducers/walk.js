import { STOCK_ALL_WALK } from '../actions/walk';

const initialState = {
  walksApi: [],
};

const walkReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_WALK:
      return {
        ...state,
        walksApi: action.walk,
      };

    default:
      return state;
  }
};

export default walkReducer;
