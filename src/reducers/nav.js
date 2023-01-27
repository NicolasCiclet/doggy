const initialState = {
  // url de l'api de Christophe
  url: 'http://christophe-rialland.vpnuser.lan/doggy/public/',

  // To display the differents mains section
  main: '',
};

const navReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LASTNAME_NEW_USER:
      return {
        ...state,
        lastnameNewUser: action.newValue,
      };

    default:
      return state;
  }
};

export default navReducer;
