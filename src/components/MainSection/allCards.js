import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneCard from './oneCard';

const AllCards = () => {
  const users = useSelector((state) => state.usersToDisplay);
  return (
    <div className="all-cards">
      <Card.Group itemsPerRow={3}>
        {
          // je map et j'utilise un spread operator pour avoir acces à toutes les propriètés
          users.map((user) => (
            <OneCard key={user.id} {...user} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllCards;
