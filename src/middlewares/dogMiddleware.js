import axios from 'axios';

import {
  UPDATE_DOG, DELETE_DOG, ADD_NEW_DOG, GET_CONNECTED_ANIMALS, stockConnectedAnimals,
  GET_USER_ANIMALS, stockUserAnimals, newDogCreated,
} from '../actions/dog';

const dogMiddleware = (store) => (next) => (action) => {
  // eslint-disable-next-line prefer-destructuring
  const url = store.getState().nav.url;
  const id = store.getState().user.watchId;
  const animalId = store.getState().dog.updateId;

  switch (action.type) {
    case ADD_NEW_DOG:
      console.log('demande d\'ajout du chien');

      axios.post(
        `${url}api/animals/`,
        {
          name: store.getState().dog.nameNewDog,
          species: store.getState().dog.breedNewDog,
          gender: store.getState().dog.genderNewDog,
          birthdate: store.getState().dog.birthNewDog,
          personality: store.getState().dog.personnalityNewDog,
          sterilized: store.getState().dog.sterilizedNewDog,
          picture: 'animals/default.png',
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        },
      )
        .then((response) => {
          console.log(response);
          console.log('chien ajouté avec succes');
          // Use to add a success message
          store.dispatch(newDogCreated());
        })
        .catch((error) => {
          console.log(error);
          console.log('erreur le chien n\'a pas été ajouté');
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

    case UPDATE_DOG:
      console.log('requete put');
      axios.put(
        `${url}api/animals/${animalId}`,
        {
          name: store.getState().dog.nameNewDog,
          species: store.getState().dog.breedNewDog,
          gender: store.getState().dog.genderNewDog,
          birthdate: store.getState().dog.birthNewDog,
          personality: store.getState().dog.personnalityNewDog,
          sterilized: store.getState().dog.sterilizedNewDog,
          picture: store.getState().dog.pictureNewDog,
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

    case GET_CONNECTED_ANIMALS:

      axios.get(
        `${url}api/users/animals`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const currentAnimals = response.data.animals;
          // console.log(currentAnimals);
          store.dispatch(stockConnectedAnimals(currentAnimals));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case GET_USER_ANIMALS:

      axios.get(
        `${url}api/users/${id}/animals`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const userAnimals = response.data.animals;
          console.log(userAnimals);
          store.dispatch(stockUserAnimals(userAnimals));
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default dogMiddleware;
