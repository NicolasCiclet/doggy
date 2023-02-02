// action to change value of main
export const CHANGE_MAIN = 'CHANGE_MAIN';

// action to show or hide error 404 page
export const SHOW_ERROR = 'SHOW_ERROR';

// action to change value of main
export const changeMain = (value) => ({
  type: CHANGE_MAIN,
  newValue: value,
});

// action to show or hide error 404 page
export const showError = (bool) => ({
  type: SHOW_ERROR,
  value: bool,
});
