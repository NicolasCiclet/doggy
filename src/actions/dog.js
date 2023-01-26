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
