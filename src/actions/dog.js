// I create const, it's better for autocompletion

// DOG
export const ADD_NAME_NEW_DOG = 'ADD_NAME_NEW_DOG';
export const ADD_BREED_NEW_DOG = 'ADD_BREED_NEW_DOG';
export const ADD_PERSONNALITY_NEW_DOG = 'ADD_PERSONNALITY_NEW_DOG';
export const ADD_GENDER_NEW_DOG = 'ADD_GENDER_NEW_DOG';
export const ADD_BIRTH_NEW_DOG = 'ADD_BIRTH_NEW_DOG';
export const ADD_STERILIZED_NEW_DOG = 'ADD_STERILIZED_NEW_DOG';
// add new dog in the BDD
export const ADD_NEW_DOG = 'ADD_NEW_DOG';
// Pour afficher la pop-up delete
export const SHOW_DELETE_DOG = 'SHOW_DELETE_DOG';
// To delete a dog
export const DELETE_DOG = 'DELETE_DOG';
// To update a dog
export const UPDATE_DOG = 'UPDATE_DOG';
// To get animals of connected user
export const GET_CONNECTED_ANIMALS = 'GET_CONNECTED_ANIMALS';
// To stock animals of connected user info in the state
export const STOCK_CONNECTED_ANIMALS = 'STOCK_CONNECTED_ANIMALS';

// To get user animals
export const GET_USER_ANIMALS = 'GET_USER_ANIMALS';
// To stock user animals in the state
export const STOCK_USER_ANIMALS = 'STOCK_USER_ANIMALS';

// To confirm user animals has been created
export const NEW_DOG_CREATED = 'NEW_DOG_CREATED';

// Dog actions
export const addNameNewDog = (value) => ({
  type: ADD_NAME_NEW_DOG,
  newValue: value,
});

export const addBreedNewDog = (value) => ({
  type: ADD_BREED_NEW_DOG,
  newValue: value,
});

export const addPersonnalityNewDog = (value) => ({
  type: ADD_PERSONNALITY_NEW_DOG,
  newValue: value,
});

export const addGenderNewDog = (value) => ({
  type: ADD_GENDER_NEW_DOG,
  newValue: value,
});

export const addBirthNewDog = (value) => ({
  type: ADD_BIRTH_NEW_DOG,
  newValue: value,
});

export const addSterilizedNewDog = (value) => ({
  type: ADD_STERILIZED_NEW_DOG,
  newValue: value,
});

export const addNewDog = () => ({
  type: ADD_NEW_DOG,
});

export const showDeleteDog = () => ({
  type: SHOW_DELETE_DOG,
});

export const deleteDog = () => ({
  type: DELETE_DOG,
});

export const updateDog = () => ({
  type: UPDATE_DOG,
});

export const getConnectedAnimals = () => ({
  type: GET_CONNECTED_ANIMALS,
});

export const stockConnectedAnimals = (animals) => ({
  type: STOCK_CONNECTED_ANIMALS,
  animals: animals,
});

export const getUserAnimals = () => ({
  type: GET_USER_ANIMALS,
});

export const stockUserAnimals = (animals) => ({
  type: STOCK_USER_ANIMALS,
  animals: animals,
});

export const newDogCreated = () => ({
  type: NEW_DOG_CREATED,
});
