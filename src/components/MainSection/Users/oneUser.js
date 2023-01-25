import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneUser = ({ firstname, city, userPicture, dog, dogPicture }) => {
  const dispatch = useDispatch();
  return (
    <Card
      className="card"
      onMouseEnter={() => dispatch(isSelected(firstname))}
      onMouseLeave={() => dispatch(isSelected(''))}
    >
      <Image
        src={userPicture}
        wrapped
        ui={false}
      />
      <Card.Content>
        <p className="card-name">{firstname}</p>
        <p className="card-info1">{city}</p>
        <p className="card-info2">{dog}</p>
      </Card.Content>
      <Image src={dogPicture} wrapped ui={false} />
    </Card>
  );
};

OneUser.propTypes = {
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  dogPicture: PropTypes.string.isRequired,
  dog: PropTypes.string.isRequired,
};

export default OneUser;
