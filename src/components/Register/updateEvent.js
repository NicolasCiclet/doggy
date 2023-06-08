import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button, Form, Message, Select, TextArea, Icon,
} from 'semantic-ui-react';
import moment from 'moment';
import {
  dateNewEvent, describNewEvent, newEventCreated, placeNewEvent, submitFormUpdateEvent,
  titleNewEvent, stockIdUpdateEvent, resetEventValue, eventFromUpdateInput,
} from '../../actions/event';
import { findUser } from '../../selectors/user';
import { getAllItineraries } from '../../actions/itinerary';

import './register.scss';
import useCountdown from '../CountDown';

// New Event FORM
const NewEvent = () => {
  // to get the event that has to be modified
  const { id } = useParams();
  // This function has been created for user, but it can be used in the same way for another entity
  const currentEvent = useSelector((state) => findUser(state.event.connectedEvents, id));
  console.log(currentEvent);

  // destructuring for all properties of currentEvent
  const {
    name, eventDate, description,
  } = currentEvent;

  const isLogged = useSelector((state) => state.user.logged);
  const eventCreate = useSelector((state) => state.event.newEventCreated);
  const eventName = useSelector((state) => state.event.titleNewEvent);
  const checkPlace = useSelector((state) => state.event.placeNewEvent);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(stockIdUpdateEvent(currentEvent.id));
      dispatch(getAllItineraries());
      dispatch(eventFromUpdateInput(name, eventDate, description));
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

  // Use component useCountdown for all success messages.
  const countdown = useCountdown(4, eventCreate, () => {
    dispatch(newEventCreated());
    navigate('/profile');
    dispatch(resetEventValue());
  });

  const handleFormSubmit = () => {
    dispatch(submitFormUpdateEvent());
  };

  // converts the date into the correct format to appear by default in form update
  const formattedEventDate = moment(currentEvent.eventDate).format('YYYY-MM-DDTHH:mm');

  return (
    <>
      {/* success message when eventCreate is true */}
      {eventCreate && (
        <Form success className="register-success">
          <Message
            success
            header={`${eventName} modifié avec succès`}
            content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
            onDismiss={() => {
              dispatch(newEventCreated());
              navigate('/profile');
              dispatch(resetEventValue());
            }}
          />
        </Form>
      )}
      {/* the form is visible only if eventCreate is false */}
      {!eventCreate && (
      <div className="register">
        <h1>Modifier mon évènement</h1>
        <Form>
          {/* Input for title */}
          <Form.Input
            label="Titre"
            placeholder={currentEvent.name}
            defaultValue={currentEvent.name}
            onChange={(event) => {
              dispatch(titleNewEvent(event.target.value));
            }}
          />
          {/* Inputs for time */}
          <Form.Input
            label="Date"
            type="datetime-local"
            defaultValue={formattedEventDate}
            onChange={(event) => {
              dispatch(dateNewEvent(event.target.value));
            }}
          />
          {/* Input for place */}
          <Form.Input
            required
            control={Select}
            options={placeOptions}
            defaultValue={currentEvent.description}
            label="Lieu"
            placeholder="Lieu"
            error={(checkPlace === '') ? { content: 'test' } : false}
            onChange={(event, result) => {
              // console.log(`change : ${event.target.value}`);
              dispatch(placeNewEvent(result.value));
            }}
          />

          {/* Input for description */}
          <Form.Input
            className="add-new-event-description"
            label="Description de l'événement"
            control={TextArea}
            placeholder={currentEvent.description}
            defaultValue={currentEvent.description}
            onChange={(event) => {
              dispatch(describNewEvent(event.target.value));
            }}
          />
          {/* Input for submit */}
          <Button control={Button} animated="fade" onClick={handleFormSubmit}>
            <Button.Content visible>Valider</Button.Content>
            <Button.Content hidden>Valider</Button.Content>
          </Button>
          <Button
            animated
            color="red"
            onClick={() => {
              window.history.back();
              dispatch(resetEventValue());
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
      )}
    </>
  );
};

export default NewEvent;
