import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Button, Form, Message, Select, TextArea,
} from 'semantic-ui-react';
import {
  addBirthNewDog, addBreedNewDog, addGenderNewDog, addNameNewDog, updateDog,
  addPersonnalityNewDog, addSterilizedNewDog,
} from '../../actions/dog';

import './register.scss';

const sterilizedOptions = [
  { text: 'Oui', value: 'yes' },
  { text: 'Non', value: 'no' },
];

const genderOptions = [
  { text: 'Mâle', value: 'male' },
  { text: 'Femelle', value: 'female' },
];

const UpdateDog = () => {
  const dispatch = useDispatch();
  const dogName = useSelector((state) => state.dog.nameNewDog);
  const userCreate = useSelector((state) => state.user.userCreate);

  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  // ! Récupérer le chien concerné et mettre ses infos en placeholder

  return (
    <>
      <div className="register">
        <h1>Modifier mon chien</h1>

        <Form onSubmit={(event) => {
          event.preventDefault();
          console.log('submit !');
          dispatch(updateDog());
        }}
        >

          <Form.Group widths="equal">
            <Form.Input
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