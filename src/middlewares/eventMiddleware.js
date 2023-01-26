import axios from 'axios';
import { SUBMIT_FORM_NEW_EVENT } from '../actions/event';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_NEW_EVENT:

      axios.post(
        // 'http://christophe-rialland.vpnuser.lan/doggy/public/api/login_check',
        {
          title: store.getState().event.titleNewEvent,
          date: store.getState().event.dateNewEvent,
          place: store.getState().event.placeNewEvent,
          describ: store.getState().event.describNewEvent,
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

    default:
  }

  next(action);
};

export default eventMiddleware;
