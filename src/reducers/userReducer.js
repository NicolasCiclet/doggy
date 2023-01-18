import users from 'src/data/userForTest';
import events from 'src/data/eventForTest';

const initialState = {
  usersToDisplay: users,
  eventsToDisplay: events,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
