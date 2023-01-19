import users from 'src/data/userForTest';

const initialState = {
  usersToDisplay: users,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
