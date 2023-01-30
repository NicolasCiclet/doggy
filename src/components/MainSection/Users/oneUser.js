import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneUser = (
  {
    firstname, city, picture, dog, dogPicture, id,
  },
) => {
  const dispatch = useDispatch();
  return (
    <Card
      className="card"
      // when user mouse enter or leave card, action is dispatched, and maker on map zoom
      onMouseEnter={() => dispatch(isSelected(firstname))}
      onMouseLeave={() => dispatch(isSelected(''))}
    >
      <Image
        src={picture}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Link to={`/user/${id}`}>
          <p className="card-name">{firstname}</p>
          <p className="card-info1">{city}</p>
          <p className="card-info2">{dog}</p>
        </Link>
      </Card.Content>
      <Image src={dogPicture} wrapped ui={false} />
    </Card>
  );
};

OneUser.propTypes = {
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  dogPicture: PropTypes.string.isRequired,
  dog: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OneUser;
