import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import picture from 'src/data/chien-rando.jpg';

import { findUser } from '../../../selectors/user';

// import './walk-page.scss';

// I get the props from the spread operator
const WalkPage = () => {
  const { id } = useParams();
  const url = useSelector((state) => state.nav.url);
  // This function has been created for user, but it can be used in the same way for another entity
  const walk = useSelector((state) => findUser(state.walk.walksApi, id));

  return (
    <div className="eventboard">
      <div className="eventboard-container">
        <div className="eventboard-header">
          <h1 className="eventboard-h1">{walk.name}</h1>
        </div>
        <div className="eventboard-main">
          <div className="eventboard-main-photo">
            <img className="eventboard-photo" src={picture} alt="evenement" />
          </div>
          <div className="eventboard-main-infos">

            <h2 className="eventboard-info-title">Description:</h2>
            <span className="eventboard-info">{walk.description}</span>

            <h2 className="eventboard-info-title">Longueur:</h2>
            <span className="eventboard-info">{walk.length}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkPage;
