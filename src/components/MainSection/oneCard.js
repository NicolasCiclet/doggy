import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const OneCard = ({ firstname, city, picture }) => (
  <Card className="card">
    <Image src={picture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{firstname}</Card.Header>
      <Card.Meta>{city}</Card.Meta>
    </Card.Content>
  </Card>
);

OneCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default OneCard;
