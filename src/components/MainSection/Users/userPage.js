import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findUser } from '../../../selectors/user';
import NewMessage from '../../Register/newMessage';

import './user-page.scss';

// I get the props from the spread operator
const UserPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => findUser(state.user.usersToDisplay, id));
  // console.log(user);
  // console.log(useSelector((state) => state.user.usersToDisplay));
  return (
    <div className="userboard">
      <div className="userboard-section">
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

            <a className="userboard-contact" href="">Me Contacter</a>
            <NewMessage />
          </div>
        </div>
      </div>
      <div className="userboard-section userboard-section-desktop" id="mes-animaux">
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
      <div className="userboard-section" id="mes-événements">
        {/* Aller chercher dans la BDD les événements liés à l'utilisateur
        et faire un map dessus */}
        <div className="userboard-header">
          <h1 className="userboard-h1">Mes événements</h1>
        </div>
        {/* <div className="userboard-main">
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
        <span className="userboard-info">{event.description}</span> */}

      </div>
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
