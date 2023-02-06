import axios from 'axios';
import { isMessageSend, POST_USER_MESSAGE } from '../actions/message';

const messageMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case POST_USER_MESSAGE:
      console.log('appel api back messages');

      // I send the request
      axios.post(
        `${url}api/messages/`,
        {
          title: 'test de titre en dur',
          content: store.getState().message.userNewMessage,
          recipient: store.getState().message.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response);
          console.log('message envoyé');
          // const allMessages = response.data.results;
          store.dispatch(isMessageSend());
        })
        // What to do in case of error
        .catch((error) => {
          console.log(error);
          console.log('conversation non trouvé');
        })

        // to do in any case
        .finally(() => {
        });

      break;
    default:
  }

  next(action);
};

export default messageMiddleware;