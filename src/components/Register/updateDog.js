import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Button, Form, Message, Select, TextArea,
} from 'semantic-ui-react';
import {
  addBirthNewDog, addBreedNewDog, addGenderNewDog, addNameNewDog, updateDog,
  addPersonnalityNewDog, addSterilizedNewDog, stockIdUpdateDog,
} from '../../actions/dog';
import { findUser } from '../../selectors/user';

import './register.scss';

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
  const currentAnimal = useSelector((state) => findUser(state.dog.connectedAnimals, id));
  // console.log(currentAnimal);

  const dogName = useSelector((state) => state.dog.nameNewDog);
  const userCreate = useSelector((state) => state.user.userCreate);

  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      dispatch(stockIdUpdateDog(currentAnimal.id));
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  return (
    <>
      <div className="register">
        <h1>Modifier {currentAnimal.name}</h1>

        <Form onSubmit={(event) => {
          event.preventDefault();
          console.log('submit !');
          dispatch(updateDog());
        }}
        >

          <Form.Group widths="equal">
            <Form.Input
              label="Nom"
              placeholder={currentAnimal.name}
              width={5}
              onChange={(event) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addNameNewDog(event.target.value));
              }}
            />
            <Form.Input
              label="Race"
              placeholder={currentAnimal.species}
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

          <Form.Input
            control={Button}
            content="Valider"
          />
        </Form>
      </div>

      {/* success message when userCreate is true */}
      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header="Ajout réussi"
            content={`Bienvenue ${dogName}`}
          />
        </Form>
      )}
    </>
  );
};

export default UpdateDog;
