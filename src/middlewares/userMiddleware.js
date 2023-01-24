import axios from 'axios';

import { SUBMIT_LOGIN, saveAuthData, SUBMIT_FORM_NEW_USER } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
            response.data.pseudo,
            response.data.token,
            response.data.logged,
          );
          store.dispatch(actionToDispatch);

          // On veut avoir accès au profil de l'utilisateur, et aux pages réservées
          // aux personnes connectées => token ?
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
