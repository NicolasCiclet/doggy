// import
import userAvatar from './user-avatar.png';
import './welcome.scss';

// == Composant
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-message">
        <h2 className="welcome-message-title">Bienvenue sur dO'ggy</h2>
        <p className="welcome-message-content">
          Découvrez les chemins de promenades à côté de chez vous
          et rencontrez d'autres passionnés avec qui échanger lors de moments de partage.
        </p>
      </div>
      <div className="welcome-newUser">
        <aside className="welcome-newUser-content">Bienvenue à Jean-Eude, notre dernier membre inscrit !</aside>
        <img className="welcome-newUser-avatar" src={userAvatar} alt="New user avatar" />
      </div>
    </div>
  );
}

// == Export
export default Welcome;
