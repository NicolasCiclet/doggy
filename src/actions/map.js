// I create const, it's better for autocompletion
export const IS_SELECTED = 'IS_SELECTED';
export const USER_LOC_DEFAUT = 'USER_LOC_DEFAUT';
export const USER_LOC_RESET = 'USER_LOC_RESET';

// zooms in on the right element
export const isSelected = (name, lat, lng) => ({
  type: IS_SELECTED,
  valueName: name,
  valueLat: lat,
  valueLng: lng,
});

// To center again on the user
export const userLocDefaut = (lat, lng) => ({
  type: USER_LOC_DEFAUT,
  valueLat: lat,
  valueLng: lng,
});

// resets the user's location
export const userLocReset = () => ({
  type: USER_LOC_RESET,
});
