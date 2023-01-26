import axios from 'axios';

import { DELETE_DOG, ADD_NEW_DOG } from '../actions/dog';

const dogMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEW_DOG:

      axios.post(
        'http://christophe-rialland.vpnuser.lan/doggy/public/api/animal/',
        {
          name: store.getState().dog.nameNewDog,
          breed: store.getState().dog.breedNewDog,
          gender: store.getState().dog.genderNewDog,
          sterilized: store.getState().dog.sterilizedNewDog,
          birthdate: store.getState().dog.birthNewDog,
          personality: store.getState().dog.personnalityNewDog,
        },
        {
          headers: {
            'Content-Type': 'application/json',
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

    case DELETE_DOG:
      console.log('suppression du chien');
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

export default dogMiddleware;
