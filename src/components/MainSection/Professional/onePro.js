import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OnePro = (
  {
    city, picture, id, name, category,
  },
) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.nav.url);
  return (
    <Card
      className="card"
      // when user mouse enter or leave card, action is dispatched, and maker on map zoom
      // onMouseEnter={() => dispatch(isSelected(lastname))}
      // onMouseLeave={() => dispatch(isSelected(''))}
    >
      <Image
        src={`${url}assets/images/${picture}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Link
          to={`/professional/${id}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <p className="card-name">{name}</p>
          <p className="card-name">{category.name}</p>
          <p className="card-info1">{city}</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

OnePro.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
};

export default OnePro;
