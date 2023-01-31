import axios from 'axios';

import {
  DELETE_USER, SUBMIT_LOGIN, saveAuthData, SUBMIT_FORM_NEW_USER, LOGOUT, addNewUser,

  SUBMIT_FORM_UPDATE_USER, GET_USER_INFO, displayInfoConnectedUser,
  GET_RANDOM_USER_INFO, displayRandomUserInfo, displayLoader, GET_ALL_USERS, stockUsers,

} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;

  switch (action.type) {
    case SUBMIT_LOGIN:
      store.dispatch(displayLoader());

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
          store.dispatch(displayLoader());

          // on veut aller enregistrer le pseudo, le token et l'info qu'on est connecté
          // dans le state => dispatch une action
          // (attention au nommage de la variable, pas "action" pour ne pas masquer le
          // paramètre qui porte le même nom) pour le message de bienvenu
          const actionToDispatch = saveAuthData(
            response.data.token,
          );
          store.dispatch(actionToDispatch);

          // We store in our storage the token
          localStorage.setItem('UserToken', response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case SUBMIT_FORM_NEW_USER:

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

          // on veut aller enregistrer le pseudo, le token et l'info qu'on est connecté
          // dans le state => dispatch une action
          // (attention au nommage de la variable, pas "action" pour ne pas masquer le
          // paramètre qui porte le même nom) pour le message de bienvenu
          const actionToDispatch = saveAuthData(
            response.data.token,
          );
          store.dispatch(actionToDispatch);
          store.dispatch(addNewUser());

          // On veut avoir accès au profil de l'utilisateur, et aux pages réservées
          // aux personnes connectées => token ?
        })
        .catch((error) => {
          console.log(error);
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
      console.log('suppression du user');
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

    case SUBMIT_FORM_UPDATE_USER:
      console.log('requete put');
      axios.put(
        // url put user donnée par Christophe,
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

          // on veut aller enregistrer le pseudo, le token et l'info qu'on est connecté
          // dans le state => dispatch une action
          // (attention au nommage de la variable, pas "action" pour ne pas masquer le
          // paramètre qui porte le même nom) pour le message de bienvenu
          const actionToDispatch = saveAuthData(
            response.data.token,
          );
          store.dispatch(actionToDispatch);
          store.dispatch(addNewUser());

          // On veut avoir accès au profil de l'utilisateur, et aux pages réservées
          // aux personnes connectées => token ?
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

          store.dispatch(displayInfoConnectedUser(
            bio,
            birthdate,
            city,
            email,
            firstname,
            gender,
            lastname,
            nickname,
            phone,
            picture,
            latitude,
            longitude,
          ));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_RANDOM_USER_INFO:
      console.log('RANDOM USER API BACK');
      axios.get(
        `${url}api/users/random/3`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${store.getState().user.token}`,
        //   },
        // },
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
      console.log('récupérer tous les users');

      axios.get(
        `${url}api/users/`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const allUsers = response.data.results;
          console.log(allUsers);
          store.dispatch(stockUsers(allUsers));
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
