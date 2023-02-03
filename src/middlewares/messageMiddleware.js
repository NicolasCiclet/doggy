import axios from 'axios';
import { isMessageSend, POST_USER_MESSAGE } from '../actions/message';

const messageMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case POST_USER_MESSAGE:
      console.log('appel api back conversations');

      // I send the request
      axios.post(
        `${url}api/conversations/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
        {
          message: {
            title: 'test de titre en dur',
            content: store.getState().message.userNewMessage,
          },
        },
        {
          destinataire: store.getState().message.userId,
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response);
          console.log('message envoyé');
          // const allConversations = response.data.results;
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
