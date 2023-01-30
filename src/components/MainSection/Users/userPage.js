import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isMessFormOpened } from '../../../actions/user';

import { findUser } from '../../../selectors/user';
import NewMessage from '../../Register/newMessage';

import './user-page.scss';

// I get the props from the spread operator
const UserPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => findUser(state.user.usersToDisplay, id));
  const isFormOpen = useSelector((state) => state.user.messFormOpen);

  // TODO a modifier avec l'apel a l'api back
  const events = useSelector((state) => state.event.eventsToDisplay);
  const event = events.find((onEvent) => (onEvent.id === 1));
  const dispatch = useDispatch();
  // console.log(user);
  // console.log(useSelector((state) => state.user.usersToDisplay));
  return (
    <div className="userboard">
      <div className="userboard-leftsection">
        {/* Afficher les infos du user connecté */}
        <div className="userboard-header">
          <h1 className="userboard-h1">Moi</h1>
        </div>
        <div className="userboard-main">
          <div className="userboard-main-photo">
            <img className="userboard-photo" src={user.userPicture} alt="user" />
          </div>
          <div className="userboard-main-infos">

            <h2 className="userboard-info">{user.firstname}</h2>

            <h3 className="userboard-info">{user.email}</h3>

            <h3 className="userboard-info">{user.phone}</h3>

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
            {isFormOpen && <NewMessage />}
          </div>
        </div>
      </div>
      <section className="userboard-rightsection-desktop">
        <div className="userboard-rightsection" id="mes-animaux">
          {/* Aller chercher dans la BDD les animaux liés à l'utilisateur
          et faire un map dessus */}
          <div className="userboard-header">
            <h1 className="userboard-h1">Mes animaux</h1>
          </div>
          <div className="userboard-main">
            <div className="userboard-main-photo">
              <img className="userboard-photo" src={user.dogPicture} alt="animal" />
            </div>
            <div className="userboard-main-infos">

              <h3 className="userboard-info">Name</h3>

              <h3 className="userboard-info">{user.dog}</h3>

              <h3 className="userboard-info">Sexe</h3>

              <h3 className="userboard-info">Personality</h3>

              <h3 className="userboard-info">Sterilized</h3>

              <blockquote className="userboard-bio">Je suis très sociable, j'adore les autre chiens et même les chats. Je déborde d'énergie pour de longues balades.</blockquote>
            </div>
          </div>
        </div>
        <div className="userboard-rightsection" id="mes-animaux">
          {/* Aller chercher dans la BDD les animaux liés à l'utilisateur
          et faire un map dessus */}
          <div className="userboard-header">
            <h1 className="userboard-h1">Mes animaux</h1>
          </div>
          <div className="userboard-main">
            <div className="userboard-main-photo">
              <img className="userboard-photo" src={user.dogPicture} alt="animal" />
            </div>
            <div className="userboard-main-infos">

              <h3 className="userboard-info">Name</h3>

              <h3 className="userboard-info">{user.dog}</h3>

              <h3 className="userboard-info">Sexe</h3>

              <h3 className="userboard-info">Personality</h3>

              <h3 className="userboard-info">Sterilized</h3>

              <blockquote className="userboard-bio">Je suis très sociable, j'adore les autre chiens et même les chats. Je déborde d'énergie pour de longues balades.</blockquote>
            </div>
          </div>
        </div>
        <div className="userboard-rightsection" id="mes-événements">
          {/* Aller chercher dans la BDD les événements liés à l'utilisateur
          et faire un map dessus */}
          <div className="userboard-header">
            <h1 className="userboard-h1">Mes événements</h1>
          </div>
          <div className="userboard-main">
            <div className="userboard-main-photo">
              <img className="userboard-photo" src={event.picture} alt="evenement" />
            </div>
            <div className="userboard-main-infos">

              <h3 className="userboard-info-title">Name:</h3>
              <span className="userboard-info">{event.name}</span>

              <h3 className="userboard-info-title">Date:</h3>
              <span className="userboard-info">{event.date}</span>

            </div>
          </div>
          <h3 className="userboard-info-title">Description:</h3>
          <span className="userboard-info">{event.description}</span>

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
