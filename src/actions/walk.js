// To get all walk of the BDD
export const GET_ALL_WALK = 'GET_ALL_WALK';
// To stock walk in the state
export const STOCK_ALL_WALK = 'STOCK_ALL_WALK';

export const getAllWalk = () => ({
  type: GET_ALL_WALK,
});

export const stockAllWalk = (walk) => ({
  type: STOCK_ALL_WALK,
  walk: walk,
});
