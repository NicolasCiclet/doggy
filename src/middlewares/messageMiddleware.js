import axios from 'axios';
import { GET_ALL_CONVERSATIONS, GET_ONE_CONVERSATION, isMessageSend, POST_USER_MESSAGE, stockAllConversations, stockOneConversation } from '../actions/message';

const messageMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;
  const idConversation = store.getState().message.idConversationApi;

  switch (action.type) {
    case POST_USER_MESSAGE:
      console.log('envoi d\'un message au back');

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
          store.dispatch(isMessageSend(true));
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

    case GET_ALL_CONVERSATIONS:
      console.log('reception des conversations du back');

      // I send the request
      axios.get(
        `${url}api/users/conversations/messages/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response.data.conversations);
          console.log('conversations recu');
          store.dispatch(stockAllConversations(response.data.conversations));
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

    // case GET_ONE_CONVERSATION:
      console.log('reception d\'une seule conversation du back');

      // I send the request
      axios.get(
        `${url}api/conversations/${idConversation}/messages/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
      // Wait for the response
        .then((response) => {
          console.log(response);
          console.log('1 conversation recu');
          // const { description } = response.data.conversation;
          // const { content, title, id } = response.data.messages;
          store.dispatch(stockOneConversation(response.data.messages));
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
