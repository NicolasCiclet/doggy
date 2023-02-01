import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button, Form, Message, Select, TextArea,
} from 'semantic-ui-react';
import {
  dateNewEvent, describNewEvent, newEventCreated, placeNewEvent, submitFormUpdateEvent,
  titleNewEvent, stockIdUpdateEvent,
} from '../../actions/event';
import { findUser } from '../../selectors/user';

import './register.scss';

// New Event FORM
const NewEvent = () => {
  // I use map to loop over all our locations, and pass the const to my input select
  const allPlace = useSelector((state) => state.event.eventsToDisplay);
  const placeOptions = allPlace.map((place) => (
    { text: place.name, value: place.id }
  ));

  // to get the event that has to be modified
  const { id } = useParams();
  const currentEvent = useSelector((state) => findUser(state.event.connectedEvents, id));
  // console.log(currentEvent);

  const isLogged = useSelector((state) => state.user.logged);
  const eventCreate = useSelector((state) => state.event.newEventCreated);
  const eventName = useSelector((state) => state.event.titleNewEvent);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(stockIdUpdateEvent(currentEvent.id));
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  return (
    <>
      {/* success message when eventCreate is true */}
      {eventCreate && (
        <Form success className="register-success">
          <Message
            success
            header={`${eventName} modifié avec succès`}
            onDismiss={() => {
              dispatch(newEventCreated());
              navigate('/profile');
            }}
          />
        </Form>
      )}
      <div className="register">
        <h1>Modifier mon évènement</h1>
        <Form onSubmit={(event) => {
          event.preventDefault();
          console.log('update evenement submit');
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
            label={currentEvent.description}
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
    </>
  );
};

export default NewEvent;
