import axios from 'axios';

import {
  DELETE_USER, SUBMIT_LOGIN, saveAuthData, SUBMIT_FORM_NEW_USER, LOGOUT, addNewUser,
  SUBMIT_FORM_UPDATE_USER, GET_USER_INFO,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  const connectedEmail = store.getState().user.mailNewUser;

  switch (action.type) {
    case SUBMIT_LOGIN:

      axios.post(
        'http://christophe-rialland.vpnuser.lan/doggy/public/api/login_check',
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
        'http://christophe-rialland.vpnuser.lan/doggy/public/api/user/',
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
        'http://christophe-rialland.vpnuser.lan/doggy/public/logout',
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
        `http://christophe-rialland.vpnuser.lan/doggy/public/api/user/${connectedEmail}`,
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

export default userMiddleware;
