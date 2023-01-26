import { useDispatch } from 'react-redux';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';
import { dateNewEvent, describNewEvent, placeNewEvent, submitFormNewEvent, titleNewEvent } from '../../actions/event';

import './register.scss';

const placeOptions = [
  { text: 'Lieu1', value: 'lieu1' },
  { text: 'Lieu2', value: 'lieu2' },
];

// New Event FORM
const NewEvent = () => {
  const dispatch = useDispatch();
  return (
    <div className="register">
      <h1>Ajouter un évènement</h1>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log('new evenement submit');
        dispatch(submitFormNewEvent());
      }}
      >
        {/* Input for title */}
        <Form.Input
          label="Titre"
          placeholder="Titre de l'évènement"
          onChange={(event) => {
            dispatch(titleNewEvent(event.target.value));
          }}
        />
        {/* Inputs for time */}
        <Form.Input
          label="Date"
          placeholder="Date"
          type="datetime-local"
          onChange={(event) => {
            dispatch(dateNewEvent(event.target.value));
          }}
        />
        {/* Input for place */}
        <Form.Input
          control={Select}
          options={placeOptions}
          label="Lieu"
          placeholder="Lieu"
          onChange={(event, result) => {
            // console.log(`change : ${event.target.value}`);
            dispatch(placeNewEvent(result.value));
          }}
        />

        {/* Input for description */}
        <Form.Input
          className="add-new-event-description"
          label="Description de l'évènement"
          control={TextArea}
          placeholder="Description de l'évènement"
          onChange={(event) => {
            dispatch(describNewEvent(event.target.value));
          }}
        />
        {/* Input for submit */}
        <Form.Input
          control={Button}
          content="Valider"
        />
      </Form>

    </div>
  );
};

export default NewEvent;
