import axios from 'axios';
import {
  DELETE_EVENT, SUBMIT_FORM_NEW_EVENT, SUBMIT_FORM_UPDATE_EVENT, GET_CONNECTED_EVENTS,
  stockConnectedEvents,
} from '../actions/event';

const eventMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

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

    case SUBMIT_FORM_UPDATE_EVENT:
      console.log('requete put');
      axios.put(
        // url donnée par christophe,
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

    case GET_CONNECTED_EVENTS:

      axios.get(
        `${url}api/users/events`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const currentEvents = response.data.events;
          // console.log(currentEvents);
          store.dispatch(stockConnectedEvents(currentEvents));
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
