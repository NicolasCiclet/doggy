import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { isMessFormOpened, stockIdWatchedUser } from '../../../actions/user';

import { findUser } from '../../../selectors/user';
import NewMessage from '../../Register/newMessage';

import './user-page.scss';
import { getUserAnimals } from '../../../actions/dog';
import { getUserEvents } from '../../../actions/event';

// I get the props from the spread operator
const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // The watched user
  const { id } = useParams();
  const user = useSelector((state) => findUser(state.user.usersApi, id));
  const isFormOpen = useSelector((state) => state.user.messFormOpen);
  // I checked if the user is connected
  const isLogged = useSelector((state) => state.user.logged);

  const date = event.eventDate;
  const frenchDate = moment(date).locale('fr').format('LLLL');

  useEffect(() => {
    if (isLogged) {
      dispatch(stockIdWatchedUser(user.id));
      dispatch(getUserAnimals());
      dispatch(getUserEvents());
    }
    else {
      navigate('/');
    }
  }, [isLogged]);

  // animals of the user watched
  const userAnimals = useSelector((state) => state.dog.watchAnimals);
  // events of the user watched
  const userEvents = useSelector((state) => state.event.watchEvents);

  return (
    <div className="userboard">
      <div className="userboard-leftsection">
        {/* Afficher les infos du user connecté */}
        <div className="userboard-header">
          <h1 className="userboard-h1">Moi</h1>
        </div>
        <div className="userboard-main">
          <div className="userboard-main-photo">
            <img className="userboard-photo" src={`http://christophe-rialland.vpnuser.lan/doggy/public/assets/images/${user.picture}`} alt="user" />
          </div>
          <div className="userboard-main-infos">

            <h2 className="userboard-info">{user.firstname}</h2>

            <h3 className="userboard-info">{user.city}</h3>

            <blockquote className="userboard-bio">{user.bio}</blockquote>

            <button
              type="button"
              className="userboard-contact"
              href=""
              onClick={() => dispatch(isMessFormOpened())}
            >
              {!isFormOpen ? 'Me Contacter' : 'Annuler'}
            </button>
            {isFormOpen && <NewMessage idUser={user.id} />}
          </div>
        </div>
      </div>
      <section className="userboard-rightsection-desktop">

        <div className="userboard-rightsection" id="mes-animaux">
          <div className="userboard-header">
            <h1 className="userboard-h1">Mes animaux</h1>
          </div>
          { userAnimals.map((animal) => (
            <div key={animal.id} className="userboard-main">
              <div className="userboard-main-photo">
                <img className="userboard-photo" src={`http://christophe-rialland.vpnuser.lan/doggy/public/assets/images/${animal.picture}`} alt="animal" />
              </div>
              <div className="userboard-main-infos">

                <h3 className="userboard-info">{animal.name}</h3>

                <h3 className="userboard-info">{animal.species}</h3>

                <h3 className="userboard-info">{animal.gender}</h3>

                <h3 className="userboard-info">{animal.sterilized ? 'Stérilisé' : 'Non stérilisé'}</h3>

                <blockquote className="userboard-bio">{animal.personality}</blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="userboard-rightsection" id="mes-événements">
          <div className="userboard-header">
            <h1 className="userboard-h1">Mes événements</h1>
          </div>
          { userEvents.map((event) => (
            <>
              <div key={event.id} className="userboard-main">
                <div className="userboard-main-photo">
                  <img className="userboard-photo" src={`http://christophe-rialland.vpnuser.lan/doggy/public/assets/images/${event.picture}`} alt="evenement" />
                </div>
                <div className="userboard-main-infos">

                  <h3 className="userboard-info-title">Name:</h3>
                  <span className="userboard-info">{event.name}</span>

                  <h3 className="userboard-info-title">Date:</h3>
                  <span className="userboard-info">{moment(event.event).locale('fr').format('LLLL')}</span>

                </div>
              </div>
              <h3 className="userboard-info-title">Description:</h3>
              <span className="userboard-info">{event.description}</span>
            </>
          ))}

        </div>

      </section>
    </div>
  );
};

// UserPage.propTypes = {
//   firstname: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   userPicture: PropTypes.string.isRequired,
//   dogPicture: PropTypes.string.isRequired,
//   dog: PropTypes.string.isRequired,
// };

export default UserPage;
