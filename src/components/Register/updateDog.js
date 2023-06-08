/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Button, Form, Icon, Message, Select, TextArea,
} from 'semantic-ui-react';
import {
  addBirthNewDog, addBreedNewDog, addGenderNewDog, addNameNewDog, updateDog,
  addPersonnalityNewDog, addSterilizedNewDog, stockIdUpdateDog, newDogCreated, dogFromUpdateInput, resetDogValue,
} from '../../actions/dog';
import { findUser } from '../../selectors/user';

import './register.scss';
import useCountdown from '../CountDown';

const sterilizedOptions = [
  { text: 'Oui', value: true },
  { text: 'Non', value: false },
];

const genderOptions = [
  { text: 'Mâle', value: 'male' },
  { text: 'Femelle', value: 'female' },
];

const UpdateDog = () => {
  const dispatch = useDispatch();

  // to get the dog that has to be modified
  const { id } = useParams();
  // This function has been created for user, but it can be used in the same way for another entity
  const currentAnimal = useSelector((state) => findUser(state.dog.connectedAnimals, id));
  // console.log(currentAnimal);

  // destructuring for all properties of currentAnimal
  const {
    name, breed, personnality, gender, birth, sterilized,
  } = currentAnimal;

  const dogName = useSelector((state) => state.dog.nameNewDog);
  const dogCreate = useSelector((state) => state.dog.newDogCreated);

  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      dispatch(stockIdUpdateDog(currentAnimal.id));

      // add current dog's values in state for update form
      dispatch(dogFromUpdateInput(name, breed, personnality, gender, birth, sterilized));
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  // Use component useCountdown for all success messages.
  const countdown = useCountdown(4, dogCreate, () => {
    dispatch(newDogCreated());
    navigate('/profile');
    dispatch(resetDogValue());
  });

  const handleFormSubmit = () => {
    dispatch(updateDog());
  };

  return (
    <>
      {/* success message when dogCreate is true */}
      {dogCreate && (
      <Form success className="register-success">
        <Message
          success
          header={`${dogName} mis à jour`}
          content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
          onDismiss={() => {
            dispatch(newDogCreated());
            navigate('/profile');
            dispatch(resetDogValue());
          }}
        />
      </Form>
      )}

      {!dogCreate && (
      <div className="register">
        <h1>Modifier {currentAnimal.name}</h1>

        <Form>

          <Form.Group widths="equal">
            <Form.Input
              label="Nom"
              placeholder={currentAnimal.name}
              defaultValue={currentAnimal.name}
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addNameNewDog(event.target.value));
              }}
            />
            <Form.Input
              label="Race"
              placeholder={currentAnimal.species}
              defaultValue={currentAnimal.species}
              width={5}
              onChange={(event) => {
                dispatch(addBreedNewDog(event.target.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Personnalité"
              control={TextArea}
              placeholder={currentAnimal.personality}
              defaultValue={currentAnimal.personality}
              width={8}
              onChange={(event) => {
                dispatch(addPersonnalityNewDog(event.target.value));
              }}
            />
            <Form.Input
              control={Select}
              options={genderOptions}
              label="Genre"
              placeholder="Genre"
              defaultValue={currentAnimal.gender}
              width={8}
              onChange={(event, result) => {
                dispatch(addGenderNewDog(result.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
              defaultValue={currentAnimal.birthdate}
              width={8}
              type="date"
              onChange={(event) => {
                dispatch(addBirthNewDog(event.target.value));
              }}
            />
            <Form.Input
              control={Select}
              options={sterilizedOptions}
              label="Stérilisé ?"
              placeholder="Stérilisé"
              defaultValue={currentAnimal.sterilized}
              width={8}
              onChange={(event, result) => {
                dispatch(addSterilizedNewDog(result.value));
              }}
            />
          </Form.Group>
          <Form.Group>
            {/* <Form.Input
              control="button"
              content="Valider"
            /> */}
            <Button control="button" animated="fade" onClick={handleFormSubmit}>
              <Button.Content visible>Valider</Button.Content>
              <Button.Content hidden>Valider</Button.Content>
            </Button>
            <Button
              animated
              color="red"
              onClick={() => {
                window.history.back();
                dispatch(resetDogValue());
              }}
            >
              {/* // cancel button and return to previous page */}
              <Button.Content visible>Annuler</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Form.Group>
        </Form>

      </div>
      )}

    </>
  );
};

export default UpdateDog;
