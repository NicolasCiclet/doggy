import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Checkbox } from 'semantic-ui-react';
import { changeDifficulty, getAllItineraries } from '../../../actions/itinerary';
import OneItinerary from './oneItinerary';

const AllItineraries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItineraries());
  }, []);

  // All initeraries
  let itineraries = useSelector((state) => state.itinerary.itinerariesApi);
  console.log(itineraries);

  // difficulty save in the state and modified by filter
  const difficulty = useSelector((state) => state.itinerary.difficulty);

  // filter on itineraries by difficulty
  if (difficulty !== '') {
    // eslint-disable-next-line max-len
    itineraries = itineraries.filter((itinerary) => (itinerary.difficulty.name === difficulty));
    console.log(itineraries);
  }

  return (
    <>
      <div className="filter">
        <Form>
          <Form.Field>
            Selectionnez la difficulté:
          </Form.Field>
          <Form.Field>
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
          <Form.Field>
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
          <Form.Field>
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
        </Form>
      </div>

      <div className="all-users">
        <h2 className="cards_title">Les balades proches de chez vous</h2>

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
    </>
  );
};

export default AllItineraries;
