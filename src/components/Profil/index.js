import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { showDeleteUser, showLink } from '../../actions/user';
import {
  getConnectedAnimals, showDeleteDog, stockIdUpdateDog, newDogDeleted,
} from '../../actions/dog';
import {
  getConnectedEvents, showDeleteEvent, stockIdUpdateEvent, newEventDeleted,
} from '../../actions/event';

import Userdelete from './Userdelete';
import Dogdelete from './Dogdelete';
import Eventdelete from './Eventdelete';

// import conversation from './conversation.svg';
import editButton from './edit.svg';
import deleteButton from './delete.svg';
import './profil.scss';
import './nav.css';
import AllConversations from './Message/allConversations';
import { getAllConversations } from '../../actions/message';

// faire une requete api get/id qui va récupérer les info du user et des animaux,
// conversation et events associés dans la BDD
// Pour l'instant, on prend un user et un event dans les fausses bdd

const Profil = () => {
  // burger-menu
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showBurgerMenu = useSelector((state) => state.user.showLink);
  // I checked if the user is connected
  const isLogged = useSelector((state) => state.user.logged);
  // console.log(isLogged);
  // To know if a dog, a event or a user as been deleted
  const dogDeleted = useSelector((state) => state.dog.dogDeleted);
  const eventDeleted = useSelector((state) => state.event.eventDeleted);

  // If the user is connected, I get his info in BDD using his email

  useEffect(() => {
    if (isLogged) {
      dispatch(getConnectedAnimals());
      dispatch(getConnectedEvents());
      dispatch(getAllConversations());
    }
    else {
      navigate('/');
    }
  }, [isLogged, dogDeleted, eventDeleted]);

  // To get connected user infos that are save in the state
  const lastname = useSelector((state) => state.user.lastnameNewUser);
  const firstname = useSelector((state) => state.user.firstnameNewUser);
  const city = useSelector((state) => state.user.cityNewUser);
  const nickname = useSelector((state) => state.user.usernameNewUser);
  const gender = useSelector((state) => state.user.genderNewUser);
  const birthdate = useSelector((state) => state.user.birthNewUser);
  const bio = useSelector((state) => state.user.bioNewUser);
  const mail = useSelector((state) => state.user.mailNewUser);
  const phone = useSelector((state) => state.user.phoneNewUser);
  const picture = useSelector((state) => state.user.pictureNewUser);
  const id = useSelector((state) => state.user.idNewUser);

  const events = useSelector((state) => state.event.connectedEvents);
  // console.log(events);

  const animals = useSelector((state) => state.dog.connectedAnimals);
  // console.log(animals);

  const url = useSelector((state) => state.nav.url);

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
        <h1 className="profil-h1">Mon profil</h1>
        <h2 className="profil-h2">Bonjour {firstname} {lastname}</h2>
        <div className="profil-header">
          <div className="profil-main">
            <div className="profil-main-photo">
              <img className="profil-photo" src={`${url}assets/images/${picture}`} alt="user" />
            </div>
            <div className="profil-main-infos">
              <div className="info-block">
                <h3 className="profil-info-title">Nickname:</h3>
                <span className="profil-info">{nickname}</span>
              </div>
              <div className="info-block">
                <h3 className="profil-info-title">Adresse mail:</h3>
                <span className="profil-info">{mail}</span>
              </div>
              <div className="info-block">
                <h3 className="profil-info-title">Phone:</h3>
                <span className="profil-info">{phone}</span>
              </div>
              <div className="info-block">
                <h3 className="profil-info-title">City:</h3>
                <span className="profil-info">{city}</span>
              </div>
              <div className="info-block">
                <h3 className="profil-info-title">Birthdate:</h3>
                <span className="profil-info">{birthdate}</span>
              </div>
              <div className="info-block">
                <h3 className="profil-info-title">Gender:</h3>
                <span className="profil-info">{gender}</span>
              </div>
              <div className="info-block-line">
                <h3 className="profil-info-title">Bio:</h3>
                <span className="profil-info">{bio}</span>
              </div>
            </div>
          </div>
          <div className="profil-buttons">
            <Link to={`/profile/update/user/${id}`}>
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
      </div>
      <div className="profil-section" id="mes-animaux">
        <h1 className="profil-h1">Mes animaux</h1>
        {dogDeleted && (
          <Form success className="register-success">
            <Message
              success
              header="Animal supprimé avec succès"
              onDismiss={() => {
                dispatch(newDogDeleted());
                navigate('/profile');
              }}
            />
          </Form>
        )}
        {!dogDeleted && (
          <>
            { animals.map((animal) => (
              <div key={animal.id} className="profil-header">
                <div className="profil-main">
                  <div className="profil-main-photo">
                    <img className="profil-photo" src={`${url}assets/images/${animal.picture}`} alt="animal" />
                  </div>
                  <div className="profil-main-infos">
                    <div className="info-block">
                      <h3 className="profil-info-title">Nom:</h3>
                      <span className="profil-info">{animal.name}</span>
                    </div>
                    <div className="info-block">
                      <h3 className="profil-info-title">Race:</h3>
                      <span className="profil-info">{animal.species}</span>
                    </div>
                    <div className="info-block">
                      <h3 className="profil-info-title">Sexe:</h3>
                      <span className="profil-info">{animal.gender}</span>
                    </div>
                    <div className="info-block">
                      <h3 className="profil-info-title">Stérilisé:</h3>
                      <span className="profil-info">{animal.sterilized ? 'oui' : 'non'}</span>
                    </div>
                    <div className="info-block-line">
                      <h3 className="profil-info-title">Personnalité:</h3>
                      <span className="profil-info">{animal.personality}</span>
                    </div>
                  </div>
                </div>
                <div className="profil-buttons">
                  <Link to={`/profile/update/animal/${animal.id}`}>
                    <img className="button" src={editButton} alt="edit" />
                  </Link>
                  <img
                    className="button"
                    src={deleteButton}
                    alt="delete"
                    onClick={() => {
                      dispatch(stockIdUpdateDog(animal.id));
                      dispatch(showDeleteDog());
                    }}
                  />
                  <Dogdelete />
                </div>
              </div>
            ))}
          </>
        )}
        <div className="new-event">
          <NavLink
            className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
            to="/register/dog"
          >
            Ajouter un animal
          </NavLink>
        </div>
      </div>
      {/* <div className="profil-section" id="mes-messages"> */}
      {/* Aller chercher dans la BDD les conversations et faire un map dessus, pour chaque
      conversation afficher le logo et le titre */}
      {/* <div className="profil-header">
        <h1 className="profil-h1">Mes messages</h1>
      </div>
      <div className="profil-main-message">
        <img className="profil-message" src={conversation} alt="message" />
        <a href="" className="conversation">Conversation avec User X</a>
      </div>
    </div> */}
      <AllConversations />
      <div className="profil-section" id="mes-événements">
        {/* Aller chercher dans la BDD les événements liés à l'utilisateur
        et faire un map dessus */}
        <h1 className="profil-h1">Mes événements</h1>
        {eventDeleted && (
          <Form success className="register-success">
            <Message
              success
              header="Evenement supprimé avec succès"
              onDismiss={() => {
                dispatch(newEventDeleted());
                navigate('/profile');
              }}
            />
          </Form>
        )}
        {!eventDeleted && (
          <>
            { events.map((onEvent) => (
              <div key={onEvent.id} className="profil-header">
                <div className="profil-main">
                  <div className="profil-main-photo">
                    <img className="profil-photo" src={`http://christophe-rialland.vpnuser.lan/doggy/public/assets/images/${onEvent.picture}`} alt="evenement" />
                  </div>
                  <div className="profil-main-infos">
                    <div className="info-block">
                      <h3 className="profil-info-title">Nom:</h3>
                      <span className="profil-info">{onEvent.name}</span>
                    </div>
                    <div className="info-block">
                      <h3 className="profil-info-title">Date:</h3>
                      <span className="profil-info">{onEvent.eventDate}</span>
                    </div>
                    <div className="info-block-line">
                      <h3 className="profil-info-title">Description:</h3>
                      <span className="profil-info">{onEvent.description}</span>
                    </div>
                  </div>
                </div>
                <div className="profil-buttons">
                  <Link to={`/profile/update/event/${onEvent.id}`}>
                    <img className="button" src={editButton} alt="edit" />
                  </Link>
                  <img
                    className="button"
                    src={deleteButton}
                    alt="delete"
                    onClick={() => {
                      dispatch(stockIdUpdateEvent(onEvent.id));
                      dispatch(showDeleteEvent());
                    }}
                  />
                  <Eventdelete />
                </div>
              </div>
            ))}
          </>
        )}
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
