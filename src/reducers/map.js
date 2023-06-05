import { IS_SELECTED, USER_LOC_DEFAUT, USER_LOC_RESET } from '../actions/map';

const initialState = {
  nameSelected: '',
  latSelected: 48.8666,
  lngSelected: 2.3333,

};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_SELECTED:
      return {
        ...state,
        nameSelected: action.valueName,
        latSelected: action.valueLat,
        lngSelected: action.valueLng,
      };
    case USER_LOC_DEFAUT:
      return {
        ...state,
        latSelected: action.valueLat,
        lngSelected: action.valueLng,
      };
    case USER_LOC_RESET:
      return {
        ...state,
        latSelected: '',
        lngSelected: '',
      };
    default:
      return state;
  }
};

export default mapReducer;
