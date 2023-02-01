import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import picture from 'src/data/chien-rando.jpg';

import { Card, Image } from 'semantic-ui-react';
import { isSelected } from '../../../actions/map';

// I get the props from the spread operator
const OneWalk = (
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
        <Link to={`/walk/${id}`}>
          <p className="card-name">{name}</p>
          <p className="card-info1">{description}</p>
          <p className="card-info2">{length}</p>
        </Link>
      </Card.Content>
    </Card>
  );
};

// we check each props
OneWalk.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default OneWalk;
