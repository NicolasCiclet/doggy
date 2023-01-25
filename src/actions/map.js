// I create const, it's better for autocompletion
export const IS_SELECTED = 'IS_SELECTED';

export const isSelected = (name) => ({
  type: IS_SELECTED,
  valueName: name,
});
