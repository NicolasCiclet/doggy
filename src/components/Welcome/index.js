// import
import userAvatar from './user-avatar.png';
import './welcome.scss';

// == Composant
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_message">
        <h2 className="welcome_message_title">Bienvenue sur dO'ggy</h2>
        <p className="welcome_message_content">
          Découvrez les chemins de promenades à côté de chez vous
          et rencontrez d'autres passionnés avec qui échanger lors de moments de partage.
        </p>
      </div>
      <div className="welcome_newUser">
        <aside className="welcome_newUser_content">Bienvenue à Jean-Eude, notre dernier membre inscrit !</aside>
        <img className="welcome_newUser_avatar" src={userAvatar} alt="New user avatar" />
      </div>
    </div>
  );
}

// == Export
export default Welcome;
