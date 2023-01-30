import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneEvent = (
  {
    name, difficulty, picture, date, id,
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
        <Link to={`/event/${id}`}>
          <p className="card-name">{name}</p>
          <p className="card-info1">{difficulty}</p>
          <p className="card-info2">{date}</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

// we check each props
OneEvent.propTypes = {
  name: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OneEvent;
