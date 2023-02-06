import {
  STOCK_ALL_CATEGORIES, STOCK_ALL_PRO, SHOW_PRO_FILTER, CHANGE_PRO_CATEGORY,
} from '../actions/pro';

const initialState = {
  professionalsApi: [],
  categoriesApi: [],

  // filter on category name
  category: '',

  // To open or close the filter window
  showFilter: false,
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

    case CHANGE_PRO_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case SHOW_PRO_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
      };

    default:
      return state;
  }
};

export default proReducer;
