import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, Form, Checkbox, Button,
} from 'semantic-ui-react';
import { changeDifficulty, getAllItineraries, showFilter } from '../../../actions/itinerary';
import OneItinerary from './oneItinerary';

import '../main-section.scss';

const AllItineraries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (isLogged) {
      dispatch(getAllItineraries());
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  // All initeraries
  let itineraries = useSelector((state) => state.itinerary.itinerariesApi);
  // console.log(itineraries);

  // To open ou close the filter window
  const filter = useSelector((state) => state.itinerary.showFilter);
  // difficulty save in the state and modified by filter
  const difficulty = useSelector((state) => state.itinerary.difficulty);

  // filter on itineraries by difficulty
  if (difficulty !== '') {
    // eslint-disable-next-line max-len
    itineraries = itineraries.filter((itinerary) => (itinerary.difficulty.name === difficulty));
    // console.log(itineraries);
  }

  return (
    <div className="all-users">
      <h2 className="cards_title">Les balades proches de chez vous</h2>
      {!filter && (
      <Button
        className="filter-button"
        type="button"
        onClick={() => {
          dispatch(showFilter());
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
              dispatch(showFilter());
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
                dispatch(changeDifficulty('Facile'));
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
                dispatch(changeDifficulty('Moyen'));
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
                dispatch(changeDifficulty('Difficile'));
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
                dispatch(changeDifficulty(''));
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
          itineraries.map((itinerary) => (
            <OneItinerary key={itinerary.id} {...itinerary} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllItineraries;
