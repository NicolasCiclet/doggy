import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const events = useSelector((state) => state.event.eventsToDisplay);
  return (
    <div className="all-events">

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
