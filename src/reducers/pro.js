import { STOCK_ALL_CATEGORIES, STOCK_ALL_PRO } from '../actions/pro';

const initialState = {
  professionalsApi: [],
  categoriesApi: [],
};

const proReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_PRO:
      return {
        ...state,
        professionalsApi: action.pro,
      };

    case STOCK_ALL_CATEGORIES:
      return {
        ...state,
        categoriesApi: action.categories,
      };

    default:
      return state;
  }
};

export default proReducer;
