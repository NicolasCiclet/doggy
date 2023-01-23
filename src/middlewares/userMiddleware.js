import axios from 'axios';

import { SUBMIT_LOGIN, saveNickname } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:

      axios.post(
        // appel à l'API user pour se logger ? ('http://localhost:3001/login'),
        {
          email: store.user.getState().mailNewUser,
          password: store.user.getState().passwordNewUser,
        },
        // pour visualiser la requete envoyée : Dev tool, onglet Network, on regarde
        // l'onglet "payload" dans le détail de la requête
      )
        .then((response) => {
          // console.log(response.data.pseudo);

          // on veut aller enregistrer le pseudo dans le state => dispatch une action
          // (attention au nommage de la variable, pas "action" pour ne pas masquer le
          // paramètre qui porte le même nom) pour le message de bienvenu
          const actionToDispatch = saveNickname(response.data.username);
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
