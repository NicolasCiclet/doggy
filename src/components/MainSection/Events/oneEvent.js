import moment from 'moment';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneEvent = (
  {
    description, id, eventDate, name, picture,
  },
) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.nav.url);

  const date = eventDate;
  const frenchDate = moment(date).locale('fr').format('LLLL');

  return (
    <Card
      className="card"
      onMouseEnter={() => dispatch(isSelected(name))}
      onMouseLeave={() => dispatch(isSelected(''))}
    >
      <Image src={`${url}assets/images/${picture}`} wrapped ui={false} />
      <Card.Content>
        <Link
          to={`/event/${id}`}
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
          <p className="card-info2">{frenchDate}</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

// we check each props
OneEvent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OneEvent;
