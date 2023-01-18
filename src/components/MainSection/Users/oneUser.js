import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const OneUser = ({ firstname, city, picture, dog }) => (
  <Card className="card">
    <Image src={picture} wrapped ui={false} />
    <Card.Content>
      <p className="card-name">{firstname}</p>
      <p className="card-info1">{city}</p>
      <p className="card-info2">{dog}</p>
    </Card.Content>
  </Card>
);

OneUser.propTypes = {
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  dog: PropTypes.string.isRequired,
};

export default OneUser;
