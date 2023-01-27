import { CHANGE_MAIN } from '../actions/nav';

const initialState = {
  // url de l'api de Christophe
  url: 'http://christophe-rialland.vpnuser.lan/doggy/public/',

  // To display the differents mains section
  main: '',
};

const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MAIN:
      return {
        ...state,
        main: action.newValue,
      };

    default:
      return state;
  }
};

export default navReducer;
