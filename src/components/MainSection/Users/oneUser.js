import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneUser = (
  {
    firstname, city, picture, dog, dogPicture, id, location,
  },
) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.nav.url);
  return (
    <Card
      className="card"
      // when user mouse enter or leave card, action is dispatched, and maker on map zoom
      onMouseEnter={() => dispatch(isSelected(id, location.latitude, location.longitude))}
      onMouseLeave={() => dispatch(isSelected('', location.latitude, location.longitude))}
    >
      <Image
        src={`${url}assets/images/${picture}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Link
          to={`/user/${id}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
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
  picture: PropTypes.string,
  dogPicture: PropTypes.string,
  dog: PropTypes.string,
  id: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

OneUser.defaultProps = {
  picture: '',
  dogPicture: '',
  dog: '',
};

export default OneUser;
