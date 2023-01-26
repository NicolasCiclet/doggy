import axios from 'axios';
import { DELETE_EVENT, SUBMIT_FORM_NEW_EVENT } from '../actions/event';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_NEW_EVENT:

      axios.post(
        // 'http://christophe-rialland.vpnuser.lan/doggy/public/api/login_check',
        {
          name: store.getState().event.titleNewEvent,
          event_date: store.getState().event.dateNewEvent,
          place: store.getState().event.placeNewEvent,
          description: store.getState().event.describNewEvent,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case DELETE_EVENT:
      console.log('suppression événement');
      // axios.delete(
      // url api fournir par Chrichri,
      // )
      //   .then((response) => {
      //     console.log(response);
      //     console.log('logout back ok');
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      break;

    default:
  }

  next(action);
};

export default eventMiddleware;
