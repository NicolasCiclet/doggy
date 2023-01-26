import { SHOW_DELETE_DOG, ADD_BIRTH_NEW_DOG, ADD_BREED_NEW_DOG, ADD_GENDER_NEW_DOG, ADD_NAME_NEW_DOG, ADD_PERSONNALITY_NEW_DOG, ADD_STERILIZED_NEW_DOG } from '../actions/dog';

const initialState = {
  nameNewDog: '',
  breedNewDog: '',
  personnalityNewDog: '',
  genderNewDog: '',
  birthNewDog: '',
  sterilizedNewDog: '',

  // pour afficher ou non la pop up de demande de confirmation pour la suppression dans le profil
  dogDelete: false,
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

    default:
      return state;
  }
};

export default dogReducer;
