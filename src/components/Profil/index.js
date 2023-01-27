import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink } from 'react-router-dom';
import { showDeleteUser, showLink } from '../../actions/user';
import { showDeleteDog } from '../../actions/dog';
import { showDeleteEvent } from '../../actions/event';

import Userdelete from './Userdelete';
import Dogdelete from './Dogdelete';
import Eventdelete from './Eventdelete';

import conversation from './conversation.svg';
import editButton from './edit.svg';
import deleteButton from './delete.svg';
import './profil.scss';
import './nav.css';

// faire une requete api get/id qui va récupérer les info du user et des animaux,
// conversation et events associés dans la BDD
// Pour l'instant, on prend un user et un event dans les fausses bdd

const Profil = () => {
  // burger-menu
  const dispatch = useDispatch();
  const showBurgerMenu = useSelector((state) => state.user.showLink);

  const users = useSelector((state) => state.user.usersToDisplay);
  const user = users.find((onUser) => (onUser.id === 1));
  const events = useSelector((state) => state.event.eventsToDisplay);
  const event = events.find((onEvent) => (onEvent.id === 1));

  return (
    <div className="profil">
      {/* menu avec des ancres menant plus bas dans la page,
      à mettre en menu burger pour le mobil */}
      <div className={`navbar ${showBurgerMenu ? 'show-nav' : 'hide-nav'} `}>
        <div className="navbar__links">
          <HashLink
            className="navbar__item slideInDown-1"
            smooth
            to="/profile#mon-profil"
            onClick={() => dispatch(showLink())}
          >
            Mon profil
          </HashLink>
          <HashLink
            className="navbar__item slideInDown-2"
            smooth
            to="/profile#mes-animaux"
            onClick={() => dispatch(showLink())}
          >
            Mes animaux
          </HashLink>
          <HashLink
            className="navbar__item slideInDown-3"
            smooth
            to="/profile#mes-messages"
            onClick={() => dispatch(showLink())}
          >
            Mes messages
          </HashLink>
          <HashLink
            className="navbar__item slideInDown-4"
            smooth
            to="/profile#mes-événements"
            onClick={() => dispatch(showLink())}
          >
            Mes événements
          </HashLink>
        </div>
        <button
          type="button"
          className="navbar__burger"
          onClick={() => dispatch(showLink())}
        >
          <span className="burger-bar" />
        </button>
      </div>
      <div className="profil-section" id="mon-profil">
        {/* Afficher les infos du user connecté */}
        <div className="profil-header">
          <h1 className="profil-h1">Mon profil</h1>
          <div className="profil-buttons">
            <Link to="/profile/update/user">
              <img className="button" src={editButton} alt="edit" />
            </Link>
            <img
              className="button"
              src={deleteButton}
              alt="delete"
              onClick={() => {
                dispatch(showDeleteUser());
              }}
            />
            <Userdelete />
          </div>
        </div>
        <h2 className="profil-h2">Bonjour {user.firstname} {user.lastname}</h2>
        <div className="profil-main">
          <div className="profil-main-photo">
            <img className="profil-photo" src={user.userPicture} alt="user" />
          </div>
          <div className="profil-main-infos">
            <div className="info-block">
              <h3 className="profil-info-title">Nickname:</h3>
              <span className="profil-info">{user.nickname}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Adresse mail:</h3>
              <span className="profil-info">{user.email}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Phone:</h3>
              <span className="profil-info">{user.phone}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">City:</h3>
              <span className="profil-info">{user.city}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Birthdate:</h3>
              <span className="profil-info">{user.birthdate}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Gender:</h3>
              <span className="profil-info">{user.gender}</span>
            </div>
          </div>
        </div>
        <h3 className="profil-info-title">Bio:</h3>
        <span className="profil-info">{user.bio}</span>
      </div>
      <div className="profil-section" id="mes-animaux">
        {/* Aller chercher dans la BDD les animaux liés à l'utilisateur
        et faire un map dessus */}
        <div className="profil-header">
          <h1 className="profil-h1">Mes animaux</h1>
          <div className="profil-buttons">
            <Link to="/profile/update/animal">
              <img className="button" src={editButton} alt="edit" />
            </Link>
            <img
              className="button"
              src={deleteButton}
              alt="delete"
              onClick={() => {
                dispatch(showDeleteDog());
              }}
            />
            <Dogdelete />
          </div>
        </div>
        <div className="profil-main">
          <div className="profil-main-photo">
            <img className="profil-photo" src={user.dogPicture} alt="animal" />
          </div>
          <div className="profil-main-infos">
            <div className="info-block">
              <h3 className="profil-info-title">Name:</h3>
              <span className="profil-info">Name</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Breed:</h3>
              <span className="profil-info">{user.dog}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Sexe:</h3>
              <span className="profil-info">Sexe</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Personality:</h3>
              <span className="profil-info">Personality</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Sterilized:</h3>
              <span className="profil-info">Sterilized</span>
            </div>
          </div>
        </div>
        <div className="new-event">
          <NavLink
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/register/dog"
          >
            Ajouter un animal
          </NavLink>
        </div>
      </div>
      <div className="profil-section" id="mes-messages">
        {/* Aller chercher dans la BDD les conversations et faire un map dessus, pour chaque
        conversation afficher le logo et le titre */}
        <div className="profil-header">
          <h1 className="profil-h1">Mes messages</h1>
        </div>
        <div className="profil-main-message">
          <img className="profil-message" src={conversation} alt="message" />
          <a href="" className="conversation">Conversation avec User X</a>
        </div>
      </div>
      <div className="profil-section" id="mes-événements">
        {/* Aller chercher dans la BDD les événements liés à l'utilisateur
        et faire un map dessus */}
        <div className="profil-header">
          <h1 className="profil-h1">Mes événements</h1>
          <div className="profil-buttons">
            <Link to="/profile/update/event">
              <img className="button" src={editButton} alt="edit" />
            </Link>
            <img
              className="button"
              src={deleteButton}
              alt="delete"
              onClick={() => {
                dispatch(showDeleteEvent());
              }}
            />
            <Eventdelete />
          </div>
        </div>
        <div className="profil-main">
          <div className="profil-main-photo">
            <img className="profil-photo" src={event.picture} alt="evenement" />
          </div>
          <div className="profil-main-infos">
            <div className="info-block">
              <h3 className="profil-info-title">Name:</h3>
              <span className="profil-info">{event.name}</span>
            </div>
            <div className="info-block">
              <h3 className="profil-info-title">Date:</h3>
              <span className="profil-info">{event.date}</span>
            </div>
          </div>
        </div>
        <h3 className="profil-info-title">Description:</h3>
        <span className="profil-info">{event.description}</span>
        <div className="new-event">
          <NavLink
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/event/new"
          >
            Créer un événement
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profil;
