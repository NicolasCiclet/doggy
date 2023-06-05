import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import picture from 'src/data/chien-rando.jpg';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneItinerary = (
  {
    difficulty, id, length, name, picture, location,
  },
) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.nav.url);

  return (
    <Card
      className="card"
      onMouseEnter={() => dispatch(isSelected(name, location.latitude, location.longitude))}
      onMouseLeave={() => dispatch(isSelected('', location.latitude, location.longitude))}
    >
      <Image src={`${url}assets/images/${picture}`} wrapped ui={false} />
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
          <p className="card-info1">{difficulty.name}</p>
          <p className="card-info2">{length} m</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

// we check each props
OneItinerary.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  difficulty: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default OneItinerary;
