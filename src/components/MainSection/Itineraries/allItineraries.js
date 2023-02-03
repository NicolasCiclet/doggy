import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllItineraries } from '../../../actions/itinerary';
import OneItinerary from './oneItinerary';

const AllItineraries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItineraries());
  }, []);

  const itineraries = useSelector((state) => state.itinerary.itinerariesApi);
  console.log(itineraries);
  return (
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
  );
};

export default AllItineraries;
