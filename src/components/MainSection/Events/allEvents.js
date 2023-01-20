import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneEvent from './oneEvent';

const AllEvents = () => {
  const events = useSelector((state) => state.event.eventsToDisplay);
  return (
    <div className="all-events">
      <h2 className="cards_title">Les événements proches de chez vous</h2>
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
