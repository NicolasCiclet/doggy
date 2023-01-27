import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Select, TextArea,
} from 'semantic-ui-react';
import {
  dateNewEvent, describNewEvent, placeNewEvent, submitFormUpdateEvent, titleNewEvent,
} from '../../actions/event';

import './register.scss';

// New Event FORM
const NewEvent = () => {
  // waiting to get the current event with the api, we use a false event
  const events = useSelector((state) => state.event.eventsToDisplay);
  const currentEvent = events.find((onEvent) => (onEvent.id === 1));

  // I use map to loop over all our locations, and pass the const to my input select
  const allPlace = useSelector((state) => state.event.eventsToDisplay);
  const placeOptions = allPlace.map((place) => (
    { text: place.name, value: place.id }
  ));

  const dispatch = useDispatch();
  return (
    <div className="register">
      <h1>Modifier mon évènement</h1>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log('new evenement submit');
        dispatch(submitFormUpdateEvent());
      }}
      >
        {/* Input for title */}
        <Form.Input
          label="Titre"
          placeholder={currentEvent.name}
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
          placeholder={currentEvent.description}
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
