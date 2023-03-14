import axios from 'axios';
import {
  GET_ALL_CONVERSATIONS, isMessageSend, POST_USER_MESSAGE, stockAllConversations,
  CONTACT_SEND_MAIL, stockUnreadMessages, PATCH_READ_MESSAGES,
} from '../actions/message';

const messageMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;
  const idConversation = store.getState().message.activeConversation;
  // console.log(idConversation);

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
      // console.log('reception des conversations du back');

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
          console.log(response.data);
          // console.log('conversations recu');
          store.dispatch(stockAllConversations(response.data.conversations));
          store.dispatch(stockUnreadMessages(response.data.conversationUnreadMessages));
        })
        // What to do in case of error
        .catch((error) => {
          // console.log(error);
          // console.log('conversation non trouvé');
        })

        // to do in any case
        .finally(() => {
        });

      break;

    case CONTACT_SEND_MAIL:
      console.log('Envoi mail contacts');

      // I send the request
      axios.post(
        `${url}api/contact/`,
        {
          sender: store.getState().message.contactName,
          senderEmail: store.getState().message.contactMail,
          message: store.getState().message.contactMessage,
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
          // store.dispatch(contactFormReset());
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

    case PATCH_READ_MESSAGES:
      console.log('on notifie le back que les mess sont lus');

      // I send the request
      axios.put(
        `${url}api/conversations/${idConversation}/read`,
        {
          idConversation: store.getState().message.activeConversation,
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
          console.log('message lu bien recu par le back');
          // const allMessages = response.data.results;
          // store.dispatch(contactFormReset());
        })
        // What to do in case of error
        .catch((error) => {
          console.log(error);
          console.log('message lu non recu par le back');
          // todo je dispatch une action qui me dis le nombre de mess lus
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
