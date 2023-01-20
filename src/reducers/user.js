import users from 'src/data/userForTest';
import { ADD_INFO_NEW_USER } from '../actions/user';

const initialState = {
  usersToDisplay: users,
  nameNewUser: '',
  cityNewUser: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_INFO_NEW_USER:
      return {
        ...state,
        nameNewUser: action.name,
        cityNewUser: action.city,
      };
    default:
      return state;
  }
};

export default userReducer;
