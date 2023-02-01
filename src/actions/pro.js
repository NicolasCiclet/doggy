// To get all professional of the BDD
export const GET_ALL_PRO = 'GET_ALL_PRO';
// To stock professional in the state
export const STOCK_ALL_PRO = 'STOCK_ALL_PRO';

export const getAllPro = () => ({
  type: GET_ALL_PRO,
});

export const stockAllPro = (pro) => ({
  type: STOCK_ALL_PRO,
  pro: pro,
});
