import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const events = useSelector((state) => state.eventsToDisplay);
  return (
    <div className="all-events">
      <Card.Group itemsPerRow={3}>
        {
          // je map et j'utilise un spread operator pour avoir acces à toutes les propriètés
          events.map((event) => (
            <OneEvent key={event.id} {...event} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllEvents;
