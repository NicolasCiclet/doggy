import axios from 'axios';

import { SUBMIT_LOGIN, saveAuthData } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:

      axios.post(
        'http://christophe-rialland.vpnuser.lan/doggy/public/api/user/',
        {
          nickname: 'toto',
          firstname: 'louis',
          lastname: 'lastname',
          gender: 'gender',
          birthdate: '1984-10-05',
          bio: 'bio',
          city: 'city',
          location: {
            latitude: '-1.96',
            longitude: '47.7',
          },
          phone: '+33602030405',
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
          // console.log(response.data.pseudo);

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
