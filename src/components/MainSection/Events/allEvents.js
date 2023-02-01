import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllEvents } from '../../../actions/event';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const events = useSelector((state) => state.event.eventsApi);
  return (
    <div className="all-events">
      <h2 className="cards_title">Les événements proches de chez vous</h2>

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
