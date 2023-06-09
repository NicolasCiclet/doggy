import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Icon, Message, Select, TextArea,
} from 'semantic-ui-react';
import {
  addBirthNewDog, addBreedNewDog, addGenderNewDog, addNameNewDog, addNewDog,
  addPersonnalityNewDog, addSterilizedNewDog, newDogCreated, resetDogValue,
} from '../../actions/dog';
import useCountdown from '../CountDown';

import './register.scss';

const sterilizedOptions = [
  { text: 'Oui', value: true },
  { text: 'Non', value: false },
];

const genderOptions = [
  { text: 'Mâle', value: 'male' },
  { text: 'Femelle', value: 'female' },
];

const DogRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dogName = useSelector((state) => state.dog.nameNewDog);
  const dogCreate = useSelector((state) => state.dog.newDogCreated);
  const nbrAnimal = useSelector((state) => state.user.nbrAnimal);

  // Use component useCountdown for all success messages.
  const countdown = useCountdown(4, dogCreate, () => {
    dispatch(newDogCreated());
    navigate('/profile');
    dispatch(resetDogValue());
  });

  const handleFormSubmit = () => {
    dispatch(addNewDog());
  };

  return (
    <>
      {/* success message when dogCreate is true */}
      {dogCreate && (
      <Form success className="register-success">
        <Message
          success
          header={`Bienvenue ${dogName}`}
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
        <h1>Ajouter un chien</h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              required
              label="Nom"
              placeholder="Nom"
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addNameNewDog(event.target.value));
              }}
            />
            <Form.Input
              label="Race"
              placeholder="Race"
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
              placeholder="Personnalité"
              width={8}
              onChange={(event) => {
                dispatch(addPersonnalityNewDog(event.target.value));
              }}
            />
            <Form.Input
              required
              control={Select}
              options={genderOptions}
              label="Genre"
              placeholder="Genre"
              width={8}
              // search
              onChange={(event, result) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addGenderNewDog(result.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Date de naissance"
              placeholder="Date de naissance"
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
              width={8}
              // search
              // searchInput={{ id: 'form-select-control-gender' }}
              onChange={(event, result) => {
                // console.log(event, result);
                dispatch(addSterilizedNewDog(result.value));
              }}
            />
          </Form.Group>
          <Form.Group>
            <Button control="button" animated="fade" onClick={handleFormSubmit}>
              <Button.Content visible>Valider</Button.Content>
              <Button.Content hidden>Valider</Button.Content>
            </Button>

            {/* // cancel button and return to previous page */}
            <Button
              animated
              color="red"
              onClick={() => {
                if (nbrAnimal === 0) {
                  navigate('/');
                }
                else {
                  window.history.back();
                }
                dispatch(resetDogValue());
              }}
            >
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

export default DogRegister;
