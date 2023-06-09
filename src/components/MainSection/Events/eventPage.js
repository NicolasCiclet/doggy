import moment from 'moment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findUser } from '../../../selectors/user';

import './event-page.scss';

// I get the props from the spread operator
const EventPage = () => {
  const { id } = useParams();
  const url = useSelector((state) => state.nav.url);
  // This function has been created for user, but it can be used in the same way for another entity
  const event = useSelector((state) => findUser(state.event.eventsApi, id));

  const date = event.eventDate;
  const frenchDate = moment(date).locale('fr').format('LLLL');

  return (
    <div className="eventboard">
      <div className="eventboard-container">
        <div className="eventboard-header">
          <h1 className="eventboard-h1">{event.name}</h1>
        </div>
        <div className="eventboard-main">
          <div className="eventboard-main-photo">
            <img className="eventboard-photo" src={`${url}assets/images/${event.picture}`} alt="evenement" />
          </div>
          <div className="eventboard-main-infos">

            <h2 className="eventboard-info-title">Lieu:</h2>
            <span className="eventboard-info">{event.itinerary.name}</span>

            <h2 className="eventboard-info-title">Description:</h2>
            <span className="eventboard-info">{event.description}</span>

            <h2 className="eventboard-info-title">Date:</h2>
            <span className="eventboard-info">{frenchDate}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
