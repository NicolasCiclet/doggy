import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

// I get the props from the spread operator
const OneEvent = ({ name, difficulty, picture, date }) => (
  <Card className="card">
    <Image src={picture} wrapped ui={false} />
    <Card.Content>
      <p className="card-name">{name}</p>
      <p className="card-info1">{difficulty}</p>
      <p className="card-info2">{date}</p>
    </Card.Content>
  </Card>
);

// we check each props
OneEvent.propTypes = {
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OneEvent;
