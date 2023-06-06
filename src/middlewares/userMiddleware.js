import axios from 'axios';
import { getAllEvents } from '../actions/event';
import { getAllItineraries } from '../actions/itinerary';
import { userLocDefaut } from '../actions/map';
import { getAllPro } from '../actions/pro';

import {
  DELETE_USER, SUBMIT_LOGIN, saveAuthData, SUBMIT_FORM_NEW_USER, LOGOUT, addNewUser,
  SUBMIT_FORM_UPDATE_USER, GET_USER_INFO, displayInfoConnectedUser,
  GET_RANDOM_USER_INFO, displayRandomUserInfo, displayLoader, GET_ALL_USERS,
  stockUsers, getUserInfo, errorConnexion, userDeleted, logOut, getAllusers,
  UPDATE_UNREAD_MESSAGE, stockupdateUnread, GET_LAST_USER, stockLastUser, connexionFormReset,

} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case SUBMIT_LOGIN:
      store.dispatch(displayLoader(true));

      axios.post(
        `${url}api/login_check`,
        {
          username: store.getState().user.mailNewUser,
          password: store.getState().user.passwordNewUser,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((response) => {
          console.log(response);

          const actionToDispatch = saveAuthData(
            response.data.token,
          );
          store.dispatch(actionToDispatch);
          store.dispatch(getUserInfo());
          store.dispatch(getAllPro());
          store.dispatch(getAllItineraries());
          store.dispatch(getAllusers());
          store.dispatch(getAllEvents());

          // We store in our storage the token
          localStorage.setItem('UserToken', response.data.token);
          store.dispatch(displayLoader(false));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayLoader(false));
          store.dispatch(errorConnexion());
        });

      break;

    case SUBMIT_FORM_NEW_USER:
      store.dispatch(displayLoader(true));

      axios.post(
        `${url}api/users/`,
        {
          nickname: store.getState().user.usernameNewUser,
          firstname: store.getState().user.firstnameNewUser,
          lastname: store.getState().user.lastnameNewUser,
          gender: store.getState().user.genderNewUser,
          birthdate: store.getState().user.birthNewUser,
          bio: store.getState().user.bioNewUser,
          city: store.getState().user.cityNewUser,
          location: {
            latitude: store.getState().user.latNewUser,
            longitude: store.getState().user.lngNewUser,
          },
          phone: store.getState().user.phoneNewUser,
          email: store.getState().user.mailNewUser,
          password: store.getState().user.passwordNewUser,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(addNewUser());
          console.log('nb 5');
          store.dispatch(connexionFormReset());
          store.dispatch(displayLoader(false));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayLoader(false));
        });

      break;

    case LOGOUT:

      axios.post(
        `${url}logout`,
      )
        .then((response) => {
          console.log(response);
          console.log('logout back ok');
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case DELETE_USER:
      console.log('suppression du compte réussie');
      axios.delete(
        `${url}api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('suppression du compte réussie');
          // Use to add a delete message
          store.dispatch(userDeleted());
          store.dispatch(logOut());
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case SUBMIT_FORM_UPDATE_USER:
      // console.log('requete put');
      axios.put(
        `${url}api/users/current`,
        {
          nickname: store.getState().user.usernameNewUser,
          firstname: store.getState().user.firstnameNewUser,
          lastname: store.getState().user.lastnameNewUser,
          gender: store.getState().user.genderNewUser,
          birthdate: store.getState().user.birthNewUser,
          bio: store.getState().user.bioNewUser,
          city: store.getState().user.cityNewUser,
          location: {
            latitude: store.getState().user.latNewUser,
            longitude: store.getState().user.lngNewUser,
          },
          phone: store.getState().user.phoneNewUser,
          email: store.getState().user.mailNewUser,
          password: store.getState().user.passwordNewUser,
          picture: store.getState().user.pictureNewUser,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response);
          console.log('user well modified');
          store.dispatch(addNewUser());
          console.log('nb 6');
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_USER_INFO:
      axios.get(
        `${url}api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          const {
            bio, birthdate, city, email, firstname, gender,
            id, lastname, nickname, phone, picture,
          } = response.data.result[0];
          const { latitude, longitude } = response.data.result[0].location;
          const { nbrAnimal } = response.data.result;
          const { nbrUnreadMessage } = response.data.result;

          store.dispatch(displayInfoConnectedUser(
            bio,
            birthdate,
            city,
            email,
            firstname,
            gender,
            id,
            lastname,
            nickname,
            phone,
            picture,
            latitude,
            longitude,
            nbrAnimal,
            nbrUnreadMessage,
          ));

          store.dispatch(userLocDefaut(latitude, longitude));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_RANDOM_USER_INFO:
      console.log('RANDOM USER API BACK');
      axios.get(
        `${url}api/users/random/4`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data.results);
          // const {
          //   firstname, lastname, nickname, bio, city, picture,
          // } = response.data.results;
          // const { latitude, longitude } = response.data.results.location;

          store.dispatch(displayRandomUserInfo(response.data.results));
          // store.dispatch(displayRandomUserInfo(
          //   bio,
          //   city,
          //   firstname,
          //   lastname,
          //   nickname,
          //   picture,
          //   latitude,
          //   longitude,
          // ));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_ALL_USERS:
      // console.log('récupérer tous les users');
      store.dispatch(displayLoader(true));

      axios.get(
        `${url}api/users/family`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(displayLoader(false));
          const allUsers = response.data.results;
          console.log(allUsers);
          store.dispatch(stockUsers(allUsers));
        })
        .catch((error) => {
          store.dispatch(displayLoader(false));
          console.log(error);
        });

      break;

    case UPDATE_UNREAD_MESSAGE:
      axios.get(
        `${url}api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // Get the number of unread messages from the user
          const { nbrUnreadMessage } = response.data.result;
          store.dispatch(stockupdateUnread(nbrUnreadMessage));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_LAST_USER:
      axios.get(
        `${url}api/users/last/1`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          console.log('dernier user recu');
          store.dispatch(stockLastUser(response.data.results[0]));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default userMiddleware;
