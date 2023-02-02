import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import picture from 'src/data/chien-rando.jpg';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneItinerary = (
  {
    description, id, length, name,
  },
) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="card"
      onMouseEnter={() => dispatch(isSelected(name))}
      onMouseLeave={() => dispatch(isSelected(''))}
    >
      <Image src={picture} wrapped ui={false} />
      <Card.Content>
        <Link
          to={`/itinerary/${id}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <p className="card-name">{name}</p>
          <p className="card-info1">{description}</p>
          <p className="card-info2">{length}</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

// we check each props
OneItinerary.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default OneItinerary;
