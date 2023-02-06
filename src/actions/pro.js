// To get all professional of the BDD
export const GET_ALL_PRO = 'GET_ALL_PRO';
// To stock professional in the state
export const STOCK_ALL_PRO = 'STOCK_ALL_PRO';

// JUST FOR TEST
export const STOCK_ALL_CATEGORIES = 'STOCK_ALL_CATEGORIES';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

// To change the value of pro category in the state
export const CHANGE_PRO_CATEGORY = 'CHANGE_PRO_CATEGORY';

// To open the filter window
export const SHOW_PRO_FILTER = 'SHOW_PRO_FILTER';

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

export const changeProCategory = (category) => ({
  type: CHANGE_PRO_CATEGORY,
  category: category,
});

export const showProFilter = () => ({
  type: SHOW_PRO_FILTER,
});
