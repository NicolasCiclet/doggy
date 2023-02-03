import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Button, Checkbox, Form,
} from 'semantic-ui-react';
import { getAllEvents, showEventFilter, changeEventDifficulty } from '../../../actions/event';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  let events = useSelector((state) => state.event.eventsApi);

  // To open ou close the filter window
  const filter = useSelector((state) => state.event.showFilter);
  // difficulty save in the state and modified by filter
  const difficulty = useSelector((state) => state.event.difficulty);

  // filter on itineraries by difficulty
  if (difficulty !== '') {
    // eslint-disable-next-line max-len
    events = events.filter((event) => (event.itinerary.difficulty.name === difficulty));
    console.log(events);
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
        Filtre
      </Button>
      )}
      {filter && (
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
