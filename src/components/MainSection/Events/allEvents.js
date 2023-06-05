import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, Button, Checkbox, Form, Select,
} from 'semantic-ui-react';
import {
  getAllEvents, showEventFilter, changeEventDifficulty, changeEventItinerary,
} from '../../../actions/event';
import { getAllItineraries } from '../../../actions/itinerary';
import { findUser } from '../../../selectors/user';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (isLogged) {
      dispatch(getAllEvents());
      dispatch(getAllItineraries());
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  let events = useSelector((state) => state.event.eventsApi);
  // console.log(events);

  // To open ou close the filter window
  const filter = useSelector((state) => state.event.showFilter);
  // difficulty save in the state and modified by filter
  const difficulty = useSelector((state) => state.event.difficulty);

  // filter on itineraries by difficulty
  if (difficulty !== '') {
    // eslint-disable-next-line max-len
    events = events.filter((event) => (event.itinerary.difficulty.name === difficulty));
    // console.log(events);
  }

  // To filter on itinerary of event :
  // I use map to loop over all our locations, and pass the const to my input select
  const allPlace = useSelector((state) => (state.itinerary.itinerariesApi));
  // console.log(allPlace);
  const placeOptions = allPlace.map((place) => (
    { text: place.name, value: place.id }
  ));

  // Get the selected itinerary name from his id
  const itineraryId = useSelector((state) => (state.event.itinerary));
  // console.log(itineraryId);
  // eslint-disable-next-line max-len
  const selectedItinerary = useSelector((state) => findUser(state.itinerary.itinerariesApi, itineraryId));
  // console.log(selectedItinerary);

  // filter on itineraries by difficulty
  if (itineraryId !== '') {
    // eslint-disable-next-line max-len
    events = events.filter((event) => (event.itinerary.name === selectedItinerary.name));
    // console.log(events);
  }

  return (
    <div className="all-events">
      <h2 className="cards_title">Les événements proches de chez vous</h2>
      {!filter && (
      <Button
        className="filter-button"
        type="button"
        onClick={() => {
          dispatch(showEventFilter());
        }}
      >
        Filtres
      </Button>
      )}
      {filter && (
        <>
          <div className="filter">
            <div className="filter-title">
              <p>Filtrez selon la difficulté:</p>
              <Button
                type="button"
                className="filter-button"
                onClick={() => {
                  dispatch(showEventFilter());
                }}
              >
                X
              </Button>
            </div>
            <Form className="filter-options">
              <Form.Field className="filter-option">
                <Checkbox
                  radio
                  label="Facile"
                  name="checkboxRadioGroup"
                  value="facile"
                  checked={difficulty === 'Facile'}
                  onChange={() => {
                    dispatch(changeEventDifficulty('Facile'));
                  }}
                />
              </Form.Field>
              <Form.Field className="filter-option">
                <Checkbox
                  radio
                  label="Moyen"
                  name="checkboxRadioGroup"
                  value="moyen"
                  checked={difficulty === 'Moyen'}
                  onChange={() => {
                    dispatch(changeEventDifficulty('Moyen'));
                  }}
                />
              </Form.Field>
              <Form.Field className="filter-option">
                <Checkbox
                  radio
                  label="Difficile"
                  name="checkboxRadioGroup"
                  value="difficile"
                  checked={difficulty === 'Difficile'}
                  onChange={() => {
                    dispatch(changeEventDifficulty('Difficile'));
                  }}
                />
              </Form.Field>
              <Form.Field className="filter-option">
                <Checkbox
                  radio
                  label="Tous"
                  name="checkboxRadioGroup"
                  value=""
                  checked={difficulty === ''}
                  onChange={() => {
                    dispatch(changeEventDifficulty(''));
                  }}
                />
              </Form.Field>
            </Form>
          </div>
          <div className="filter-or"> Ou </div>
          <div className="filter">
            <div className="filter-title">
              <p>Filtrez selon la balade:</p>
            </div>
            <div className="filter-options">
              <Form.Input
                control={Select}
                options={placeOptions}
                label="Lieu"
                placeholder="Lieu"
                onChange={(event, result) => {
                  // console.log(`change : ${event.target.value}`);
                  dispatch(changeEventItinerary(result.value));
                }}
              />
              <Form.Field className="filter-option">
                <Checkbox
                  radio
                  label="Tous"
                  name="checkboxRadioGroup"
                  value=""
                  checked={itineraryId === ''}
                  onChange={() => {
                    dispatch(changeEventItinerary(''));
                  }}
                />
              </Form.Field>
            </div>
          </div>
        </>
      )}
      {/* Card it's from Semantin UI */}

      <Card.Group itemsPerRow={3}>
        {
          // I use map and a spread operator to have access to all properties
          events.map((event) => (
            <OneEvent key={event.id} {...event} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllEvents;
