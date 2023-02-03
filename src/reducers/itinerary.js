import { STOCK_ALL_ITINERARIES, CHANGE_DIFFICULTY } from '../actions/itinerary';

const initialState = {
  // all itineraries
  itinerariesApi: [],

  // filter on difficulty
  difficulty: '',
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

    default:
      return state;
  }
};

export default itinerariesReducer;
