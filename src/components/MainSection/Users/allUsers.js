import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneUser from './oneUser';

const AllUsers = () => {
  const users = useSelector((state) => state.usersToDisplay);
  return (
    <div className="all-users">
      <Card.Group itemsPerRow={3}>
        {
          // je map et j'utilise un spread operator pour avoir acces à toutes les propriètés
          users.map((user) => (
            <OneUser key={user.id} {...user} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllUsers;
