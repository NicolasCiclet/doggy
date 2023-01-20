import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import OneUser from './oneUser';

const AllUsers = () => {
  const users = useSelector((state) => state.user.usersToDisplay);
  return (
    <div className="all-users">
      <h2 className="cards_title">Les amis potentiels proches de chez vous</h2>
      <Card.Group itemsPerRow={3}>
        {
          // I use map and a spread operator to have access to all properties
          users.map((user) => (
            <OneUser key={user.id} {...user} />
          ))
        }
      </Card.Group>
    </div>
  );
};

export default AllUsers;
