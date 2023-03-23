// Import the reducer where you want to do the test
import user from 'src/reducers/user';

// We import an action
import { saveAuthData } from 'src/actions/user';

/* Pass as argument to the describe function :
A string to identify this chapter
A callback function that will contain the tests */
describe('reducer from user', () => {

/* Pass as argument to the test function :
A string to identify this test
A callback function that will contain the assertion for this test */
  test('check treatment of action SAVE_AUTH_DATA', () => {
    // we build the initial state 
    const stateBefore = {
      token: '',
      logged: false,
      mailNewUser: '',
    };
    // Simulate the payload
    const payload = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';
    // action that will contain the payload
    const action = saveAuthData(payload);
    // Theoretical output state
    const expectedStateAfter = {
      token: payload,
      logged: true,
      mailNewUser: '',
    };
      // toEqual on objects : check one by one the properties and values of both objects
    expect(user(stateBefore, action)).toEqual(expectedStateAfter);
  });
  test('check treatment of action SAVE_AUTH_DATA To add user mail', () => {
    const stateBefore = {
      token: '',
      logged: false,
      mailNewUser: '',
    };
    const payload = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';
    const action = saveAuthData(payload);
    const expectedStateAfter = {
      token: payload,
      logged: true,
      // This time we want the mail to be added in our reduceur
      mailNewUser: 'test@test.com',
    };
    expect(user(stateBefore, action)).toEqual(expectedStateAfter);
  });
});
