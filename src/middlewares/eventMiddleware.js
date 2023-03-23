import axios from 'axios';
import {
  DELETE_EVENT, SUBMIT_FORM_NEW_EVENT, SUBMIT_FORM_UPDATE_EVENT, GET_CONNECTED_EVENTS,
  stockConnectedEvents, GET_ALL_EVENTS, stockUserEvents, GET_USER_EVENTS, newEventCreated,
  stockAllEvents, newEventDeleted, GET_RANDOM_EVENT, displayRandomEvent,
} from '../actions/event';
import { displayLoader } from '../actions/user';

const eventMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;
  const id = store.getState().user.watchId;
  const eventId = store.getState().event.updateId;

  switch (action.type) {
    case SUBMIT_FORM_NEW_EVENT:
      console.log('envoi requete creation event');

      axios.post(
        // 'http://christophe-rialland.vpnuser.lan/doggy/public/api/events/',
        `${url}api/events/`,
        {
          name: store.getState().event.titleNewEvent,
          description: store.getState().event.describNewEvent,
          eventDate: store.getState().event.dateNewEvent,
          picture: 'events/default.svg',
          itinerary: store.getState().event.placeNewEvent,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('event créé avec succes');
          // Use to add a success message
          store.dispatch(newEventCreated());
        })
        .catch((error) => {
          console.log(error);
          console.log('erreur event non créé');
        });

      break;

    case DELETE_EVENT:
      console.log('suppression event');
      axios.delete(
        `${url}api/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('événement supprimé avec succes');
          // Use to add a delete message
          store.dispatch(newEventDeleted());
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case SUBMIT_FORM_UPDATE_EVENT:
      console.log('requete put');
      axios.put(
        `${url}api/events/${eventId}`,
        {
          name: store.getState().event.titleNewEvent,
          description: store.getState().event.describNewEvent,
          eventDate: store.getState().event.dateNewEvent,
          picture: store.getState().event.pictureNewEvent,
          itinerary: store.getState().event.placeNewEvent,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('event créé avec succes');
          // Use to add a success message
          store.dispatch(newEventCreated());
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

    case GET_ALL_EVENTS:

      store.dispatch(displayLoader(true));

      axios.get(
        `${url}api/events/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(displayLoader(false));
          console.log(response.data.results);
          console.log('all events recup');
          const allEvents = response.data.results;
          store.dispatch(stockAllEvents(allEvents));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayLoader(false));
        });

      break;

    case GET_USER_EVENTS:

      axios.get(
        `${url}api/users/${id}/events`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const userEvents = response.data.events;
          console.log(userEvents);
          store.dispatch(stockUserEvents(userEvents));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_RANDOM_EVENT:

      axios.get(
        `${url}api/events/random/4`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data.results);
          store.dispatch(displayRandomEvent(response.data.results));
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
