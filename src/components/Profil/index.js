import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import conversation from './conversation.svg';
import './profil.scss';

// faire une requete api get/id qui va récupérer les info du user et des animaux,
// conversation et events associés dans la BDD
// Pour l'instant, on prend un user et un event dans les fausses bdd

const Profil = () => {
  const users = useSelector((state) => state.user.usersToDisplay);
  const user = users.find((onUser) => (onUser.id === 1));
  const events = useSelector((state) => state.event.eventsToDisplay);
  const event = events.find((onEvent) => (onEvent.id === 1));

  return (
    <div className="profil">
      {/* menu avec des ancres menant plus bas dans la page,
      à mettre en menu burger pour le mobil */}
      <div className="profil-nav">
        <HashLink className="profil-link" smooth to="/Profil#mon-profil">
          Mon profil
        </HashLink>
        <HashLink className="profil-link" smooth to="/Profil#mes-animaux">
          Mes animaux
        </HashLink>
        <HashLink className="profil-link" smooth to="/Profil#mes-messages">
          Mes messages
        </HashLink>
        <HashLink className="profil-link" smooth to="/Profil#mes-événements">
          Mes événements
        </HashLink>
      </div>
      <div className="profil-section" id="mon-profil">
        {/* Afficher les infos du user connecté */}
        <h1 className="profil-title">Bonjour {user.firstname} {user.lastname}</h1>
        <img className="profil-photo" src={user.userPicture} alt="user" />
        <h3 className="profil-info-title">Nickname:</h3>
        <span className="profil-info">{user.nickname}</span>
        <h3 className="profil-info-title">Adresse mail:</h3>
        <span className="profil-info">{user.email}</span>
        <h3 className="profil-info-title">Phone:</h3>
        <span className="profil-info">{user.phone}</span>
        <h3 className="profil-info-title">City:</h3>
        <span className="profil-info">{user.city}</span>
        <h3 className="profil-info-title">Birthdate:</h3>
        <span className="profil-info">{user.birthdate}</span>
        <h3 className="profil-info-title">Gender:</h3>
        <span className="profil-info">{user.gender}</span>
        <h3 className="profil-info-title">Bio:</h3>
        <span className="profil-info">{user.bio}</span>
      </div>
      <div className="profil-section" id="mes-animaux">
        {/* Aller chercher dans la BDD les animaux liés à l'utilisateur
        et faire un map dessus */}
        <img className="profil-photo" src={user.dogPicture} alt="animal" />
        <h3 className="profil-info-title">Name:</h3>
        <span className="profil-info">Name</span>
        <h3 className="profil-info-title">Breed:</h3>
        <span className="profil-info">{user.dog}</span>
        <h3 className="profil-info-title">Sexe:</h3>
        <span className="profil-info">Sexe</span>
        <h3 className="profil-info-title">Personality:</h3>
        <span className="profil-info">Personality</span>
        <h3 className="profil-info-title">Sterilized</h3>
        <span className="profil-info">Sterilized</span>
      </div>
      <div className="profil-section" id="mes-messages">
        {/* Aller chercher dans la BDD les conversations et faire un map dessus, pour chaque
        conversation afficher le logo et le titre */}
        <img className="profil-message" src={conversation} alt="message" />
        <a href="" className="conversation">Conversation avec Nom de l'autre utilisation</a>
      </div>
      <div className="profil-section" id="mes-événements">
        {/* Aller chercher dans la BDD les événements liés à l'utilisateur
        et faire un map dessus */}
        <img className="profil-photo" src={event.picture} alt="evenement" />
        <h3 className="profil-info-title">Name:</h3>
        <span className="profil-info">{event.name}</span>
        <h3 className="profil-info-title">Date:</h3>
        <span className="profil-info">{event.date}</span>
        <h3 className="profil-info-title">Description:</h3>
        <span className="profil-info">{event.description}</span>
      </div>

    </div>
  );
};

export default Profil;
