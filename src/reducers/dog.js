import {
  SHOW_DELETE_DOG, ADD_BIRTH_NEW_DOG, ADD_BREED_NEW_DOG, ADD_GENDER_NEW_DOG,
  ADD_NAME_NEW_DOG, ADD_PERSONNALITY_NEW_DOG, ADD_STERILIZED_NEW_DOG, STOCK_CONNECTED_ANIMALS,
  STOCK_USER_ANIMALS, STOCK_ID_UPDATE_DOG,
  NEW_DOG_CREATED, NEW_DOG_DELETED, CHANGE_SEXE_DOG, DOG_FROM_UPDATE_INPUT, RESET_DOG_VALUE,
} from '../actions/dog';

const initialState = {
  connectedAnimals: [],
  watchAnimals: [],
  nameNewDog: '',
  breedNewDog: '',
  personnalityNewDog: '',
  genderNewDog: '',
  birthNewDog: '',
  sterilizedNewDog: '',
  pictureNewDog: 'animals/default.png',

  // only use to show or hide succes message
  newDogCreated: false,

  // only use to show or hide succes message
  dogDeleted: false,

  // pour afficher ou non la pop up de demande de confirmation pour la suppression dans le profil
  dogDelete: false,

  // update or delete dog id
  updateId: 0,

  // to filter on the dog gender
  dogGender: '',
};

const dogReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NAME_NEW_DOG:
      return {
        ...state,
        nameNewDog: action.newValue,
      };

    case ADD_BREED_NEW_DOG:
      return {
        ...state,
        breedNewDog: action.newValue,
      };

    case ADD_PERSONNALITY_NEW_DOG:
      return {
        ...state,
        personnalityNewDog: action.newValue,
      };

    case ADD_GENDER_NEW_DOG:
      return {
        ...state,
        genderNewDog: action.newValue,
      };

    case ADD_BIRTH_NEW_DOG:
      return {
        ...state,
        birthNewDog: action.newValue,
      };

    case ADD_STERILIZED_NEW_DOG:
      return {
        ...state,
        sterilizedNewDog: action.newValue,
      };

    case SHOW_DELETE_DOG:
      return {
        ...state,
        // modification(s) d'info(s) du state, ici on va chercher dans le payload de l'action
        dogDelete: !state.dogDelete,
      };

    // Animals of the connected user
    case STOCK_CONNECTED_ANIMALS:
      return {
        ...state,
        connectedAnimals: action.animals,
      };

    // Animals of the watched user
    case STOCK_USER_ANIMALS:
      return {
        ...state,
        watchAnimals: action.animals,
      };

      // when new dig is created, value pass true
    case NEW_DOG_CREATED:
      return {
        ...state,
        newDogCreated: !state.newDogCreated,
      };

    // Update dog
    case STOCK_ID_UPDATE_DOG:
      return {
        ...state,
        updateId: action.id,
      };

      // when new dog is deleted, value pass true
    case NEW_DOG_DELETED:
      return {
        ...state,
        dogDeleted: !state.dogDeleted,
      };

    case CHANGE_SEXE_DOG:
      return {
        ...state,
        dogGender: action.gender,
      };

      // add current dog's values in state for update form
    case DOG_FROM_UPDATE_INPUT:
      return {
        ...state,
        nameNewDog: action.name,
        breedNewDog: action.breed,
        personnalityNewDog: action.personnality,
        genderNewDog: action.gender,
        birthNewDog: action.birth,
        sterilizedNewDog: action.sterilized,
      };

    case RESET_DOG_VALUE:
      return {
        ...state,
        nameNewDog: '',
        breedNewDog: '',
        personnalityNewDog: '',
        genderNewDog: '',
        birthNewDog: '',
        sterilizedNewDog: '',
      };

    default:
      return state;
  }
};

export default dogReducer;
