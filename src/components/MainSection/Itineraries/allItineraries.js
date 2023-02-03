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

  const itineraries = useSelector((state) => state.itinerary.itinerariesApi);
  console.log(itineraries);

  const difficulty = useSelector((state) => state.itinerary.difficulty);

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
              label="facile"
              name="checkboxRadioGroup"
              value="facile"
              checked={difficulty === 'facile'}
              onChange={() => {
                dispatch(changeDifficulty('facile'));
              }}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="moyen"
              name="checkboxRadioGroup"
              value="moyen"
              checked={difficulty === 'moyen'}
              onChange={() => {
                dispatch(changeDifficulty('moyen'));
              }}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="difficile"
              name="checkboxRadioGroup"
              value="difficile"
              checked={difficulty === 'difficile'}
              onChange={() => {
                dispatch(changeDifficulty('difficile'));
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
