import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, Message, Select, TextArea, Icon,
} from 'semantic-ui-react';
import {
  dateNewEvent, describNewEvent, newEventCreated, placeNewEvent,
  submitFormNewEvent, titleNewEvent,
} from '../../actions/event';

import './register.scss';
import { getAllItineraries } from '../../actions/itinerary';

// New Event FORM
const NewEvent = () => {
  const isLogged = useSelector((state) => state.user.logged);
  const eventCreate = useSelector((state) => state.event.newEventCreated);
  const eventName = useSelector((state) => state.event.titleNewEvent);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(getAllItineraries());
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  // I use map to loop over all our locations, and pass the const to my input select
  const allPlace = useSelector((state) => (state.itinerary.itinerariesApi));
  // console.log(allPlace);
  const placeOptions = allPlace.map((place) => (
    { text: place.name, value: place.id }
  ));

  return (
    <>
      {/* success message when eventCreate is true */}
      {eventCreate && (
        <Form success className="register-success">
          <Message
            success
            header="Evènement ajouté avec succès"
            content={`Nouvel évènement ${eventName}`}
            onDismiss={() => {
              dispatch(newEventCreated());
              navigate('/profile');
            }}
          />
        </Form>
      )}
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
            required
            label="Titre"
            placeholder="Titre de l'évènement"
            onChange={(event) => {
              dispatch(titleNewEvent(event.target.value));
            }}
          />
          {/* Inputs for time */}
          <Form.Input
            required
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
          <Button control={Button} animated="fade">
            <Button.Content visible>Valider</Button.Content>
            <Button.Content hidden>Valider</Button.Content>
          </Button>
          <Button
            animated
            color="red"
            onClick={() => {
              window.history.back();
            }}
          >
            {/* // cancel button and return to previous page */}
            <Button.Content visible>Annuler</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Form>

      </div>
    </>
  );
};

export default NewEvent;
