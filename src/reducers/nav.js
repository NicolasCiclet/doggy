import { CHANGE_MAIN, SHOW_ERROR } from '../actions/nav';

const initialState = {
  // url of Christophe's local server
  // url: 'http://christophe-rialland.vpnuser.lan/doggy/public/',
  url: 'https://www.doggy.wf/',

  // To display the differents mains section
  main: '',
  showError: false,
};

const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MAIN:
      return {
        ...state,
        main: action.newValue,
      };

    case SHOW_ERROR:
      return {
        ...state,
        showError: action.value,
      };

    default:
      return state;
  }
};

export default navReducer;
