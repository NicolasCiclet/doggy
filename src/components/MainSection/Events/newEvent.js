import { useDispatch } from 'react-redux';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';
import { authorNewEvent, dateNewEvent, describNewEvent, endNewEvent, placeNewEvent, startNewEvent, titleNewEvent } from '../../../actions/event';

import './new-event.scss';

const placeOptions = [
  { text: 'Lieu1', value: 'lieu1' },
  { text: 'Lieu2', value: 'lieu2' },
];

// New Event FORM
const NewEvent = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-new-event">
      <h1>Ajouter un évènement</h1>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log('evenement submit');
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
        <Form.Group widths="equal">
          <Form.Input
            label="Date"
            placeholder="Date"
            type="date"
            onChange={(event) => {
              dispatch(dateNewEvent(event.target.value));
            }}
          />
          <Form.Input
            label="Début"
            placeholder="Début"
            type="time"
            onChange={(event) => {
              dispatch(startNewEvent(event.target.value));
            }}
          />
          <Form.Input
            label="Fin"
            placeholder="Fin"
            type="time"
            onChange={(event) => {
              dispatch(endNewEvent(event.target.value));
            }}
          />
        </Form.Group>
        <Form.Group widths="equal">
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
          {/* Input for author */}
          <Form.Input
            label="Auteur"
            placeholder="Auteur"
            onChange={(event) => {
              dispatch(authorNewEvent(event.target.value));
            }}
          />
        </Form.Group>
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
