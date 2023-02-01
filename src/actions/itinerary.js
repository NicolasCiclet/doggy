// To get all itineraries of the BDD
export const GET_ALL_ITINERARIES = 'GET_ALL_ITINERARIES';
// To stock them in the state
export const STOCK_ALL_ITINERARIES = 'STOCK_ALL_ITINERARIES';

export const getAllItineraries = () => ({
  type: GET_ALL_ITINERARIES,
});

export const stockAllItineraries = (allItineraries) => ({
  type: STOCK_ALL_ITINERARIES,
  allItineraries: allItineraries,
});
