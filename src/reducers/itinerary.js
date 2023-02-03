import { STOCK_ALL_ITINERARIES, CHANGE_DIFFICULTY, SHOW_FILTER } from '../actions/itinerary';

const initialState = {
  // all itineraries
  itinerariesApi: [],

  // filter on difficulty
  difficulty: '',

  // To open or close the filter window
  showFilter: false,
};

const itinerariesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_ITINERARIES:
      return {
        ...state,
        itinerariesApi: action.allItineraries,
      };

    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty,
      };

    case SHOW_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
      };

    default:
      return state;
  }
};

export default itinerariesReducer;
