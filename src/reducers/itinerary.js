import { STOCK_ALL_ITINERARIES } from '../actions/itinerary';

const initialState = {
  // all itineraries
  itinerariesApi: [],

};

const itinerariesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_ITINERARIES:
      return {
        ...state,
        itinerariesApi: action.allItineraries,
      };

    default:
      return state;
  }
};

export default itinerariesReducer;
