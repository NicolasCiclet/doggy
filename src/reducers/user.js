import users from 'src/data/userForTest';
import { ADD_CITY_NEW_USER, ADD_NAME_NEW_USER, ADD_NEW_USER } from '../actions/user';

const initialState = {
  usersToDisplay: users,
  nameNewUser: '',
  cityNewUser: '',
  userCreate: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NAME_NEW_USER:
      return {
        ...state,
        nameNewUser: action.name,
      };

    case ADD_CITY_NEW_USER:
      return {
        ...state,
        cityNewUser: action.city,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        userCreate: !state.userCreate,
      };
    default:
      return state;
  }
};

export default userReducer;
