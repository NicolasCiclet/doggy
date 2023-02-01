import { STOCK_ALL_PRO } from '../actions/pro';

const initialState = {
  professionalsApi: [],
};

const proReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_PRO:
      return {
        ...state,
        professionalsApi: action.pro,
      };

    default:
      return state;
  }
};

export default proReducer;
