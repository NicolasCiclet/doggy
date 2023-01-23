import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Message, Select } from 'semantic-ui-react';
import { addBirthNewDog, addBreedNewDog, addGenderNewDog, addNameNewDog, addPersonnalityNewDog, addSterilizedNewDog } from '../../../actions/dog';

import './register.scss';

const personnalityOptions = [
  { text: 'A remplir...', value: 'todo' },
  { text: 'A remplir...', value: 'todo1' },
  { text: 'A remplir...', value: 'todo2' },
];

const sterilizedOptions = [
  { text: 'Oui', value: 'yes' },
  { text: 'Non', value: 'no' },
];

const genderOptions = [
  { text: 'Mâle', value: 'male' },
  { text: 'Femelle', value: 'female' },
];

const DogRegister = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.lastnameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  const checkMail = useSelector((state) => state.user.mailNewUser);
  const mailCheckedBool = useSelector((state) => state.user.mailChecked);

  return (
    <>
      <div className="register">
        <h1>Mon toutou</h1>

        <Form onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit !');
          // if (validate(checkMail)) {
          //   dispatch(getCityApi());
          // }
          // else {
          //   dispatch(mailChecked(false));
          // }
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
            <Form.Input
              control={Select}
              options={personnalityOptions}
              label="Personnalité"
              placeholder="Personnalité"
              width={8}
              search
              // searchInput={{ id: 'form-select-control-gender' }}
              onChange={(event, result) => {
                dispatch(addPersonnalityNewDog(result.value));
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              control={Select}
              options={genderOptions}
              label="Genre"
              placeholder="Genre"
              width={5}
              onChange={(event, result) => {
                // console.log(`change : ${event.target.value}`);
                dispatch(addGenderNewDog(result.value));
              }}
            />
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
              search
              // searchInput={{ id: 'form-select-control-gender' }}
              onChange={(event, result) => {
                // console.log(event, result);
                dispatch(addSterilizedNewDog(result.value));
              }}
            />
          </Form.Group>

          <Form.Input
            control={Button}
            content="Confirm"
          />
        </Form>
      </div>

      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header="Inscription réussi"
            content={`Bienvenue ${name}`}
          />
        </Form>
      )}
    </>
  );
};

export default DogRegister;
