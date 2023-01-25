import { IS_SELECTED } from '../actions/map';

const initialState = {
  nameSelected: '',
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_SELECTED:
      return {
        ...state,
        nameSelected: action.valueName,
      };
    default:
      return state;
  }
};

export default mapReducer;
