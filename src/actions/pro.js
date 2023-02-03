// To get all professional of the BDD
export const GET_ALL_PRO = 'GET_ALL_PRO';
// To stock professional in the state
export const STOCK_ALL_PRO = 'STOCK_ALL_PRO';

// JUST FOR TEST
export const STOCK_ALL_CATEGORIES = 'STOCK_ALL_CATEGORIES';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export const getAllPro = () => ({
  type: GET_ALL_PRO,
});

export const stockAllPro = (pro) => ({
  type: STOCK_ALL_PRO,
  pro: pro,
});

// JUST FOR TEST
export const getAllCategories = () => ({
  type: GET_ALL_CATEGORIES,
});
export const stockAllCategories = (categories) => ({
  type: STOCK_ALL_CATEGORIES,
  categories: categories,
});
