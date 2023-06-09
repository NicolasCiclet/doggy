// import users from 'src/data/userForTest';
import {
  SHOW_LINK, SAVE_AUTH_DATA, ADD_BIO_NEW_USER, ADD_BIRTH_NEW_USER,
  ADD_CITY_NEW_USER, ADD_FIRSTNAME_NEW_USER, ADD_GENDER_NEW_USER,
  ADD_LASTNAME_NEW_USER, ADD_LATLNG_NEW_USER, ADD_MAIL_NEW_USER,
  ADD_NEW_USER, ADD_PASSWORD_NEW_USER, ADD_PHONE_NEW_USER, ADD_USERNAME_NEW_USER,
  UPDATE_SETTINGS_FIELD, CITY_FIND, LOGOUT, ADD_PICTURE_NEW_USER,

  ADD_CHECKED_PASSWORD_NEW_USER, SHOW_DELETE_USER, DISPLAY_INFO_CONNECTED_USER,
  IS_MESS_FORM_OPENED, DISPLAY_RANDOM_USER_INFO, DISPLAY_LOADER, STOCK_USERS,
  STOCK_ID_WATCHED_USER, ERROR_CONNEXION, USER_DELETED, CHANGE_SEXE_USER,
  SHOW_USER_FILTER,
  STOCK_UPDATE_UNREAD,
  STOCK_LAST_USER,
  CONNEXION_FORM_RESET,
  IS_REP_FORM_OPENED,
  RESET_USER_VALUE,
} from '../actions/user';

const initialState = {
  // usersToDisplay: users,

  randomUsersToDisplay: [],

  usersApi: [],

  lastnameNewUser: '',
  firstnameNewUser: '',
  idNewUser: 0,
  cityNewUser: '',
  usernameNewUser: '',
  passwordNewUser: '',
  checkedPasswordNewUser: '',
  genderNewUser: '',
  birthNewUser: '',
  bioNewUser: '',
  mailNewUser: '',
  phoneNewUser: '',
  pictureNewUser: [],
  // Annecy
  // latNewUser: 45.8692,
  // lngNewUser: 6.129,
  // Paris
  latNewUser: 48.8666,
  lngNewUser: 2.3333,
  nbrAnimal: '',
  isCityFind: true,
  nbrUnreadMessage: 0,

  userCreate: false,

  errorConnexion: false,

  token: '',
  logged: false,

  // pour afficher ou non la pop up de demande de confirmation pour la suppression dans le profil
  userDelete: false,

  // To display the succes message when a user is deleted and logout him
  userDeleted: false,

  // pour afficher ou non le menu burger de la page profil
  showLink: false,

  // change display of new message form
  messFormOpen: false,
  repFormOpen: false,

  dislpayLoader: false,

  // id of watched user
  watchId: 0,

  // to open or close filter window
  showFilter: false,

  // to filter on the user gender
  userGender: '',

  // Info for form contact us
  contactName: '',
  contactMail: '',
  contactMessage: '',

  // The last user
  lastUser: [],

};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LASTNAME_NEW_USER:
      return {
        ...state,
        lastnameNewUser: action.newValue,
      };

    case ADD_FIRSTNAME_NEW_USER:
      return {
        ...state,
        firstnameNewUser: action.newValue,
      };

    case ADD_CITY_NEW_USER:
      return {
        ...state,
        cityNewUser: action.newValue,
      };

    case ADD_USERNAME_NEW_USER:
      return {
        ...state,
        usernameNewUser: action.newValue,
      };

    case ADD_PASSWORD_NEW_USER:
      return {
        ...state,
        passwordNewUser: action.newValue,
      };

    case ADD_CHECKED_PASSWORD_NEW_USER:
      return {
        ...state,
        checkedPasswordNewUser: action.newValue,
      };

    case ADD_GENDER_NEW_USER:
      return {
        ...state,
        genderNewUser: action.newValue,
      };

    case ADD_BIRTH_NEW_USER:
      return {
        ...state,
        birthNewUser: action.newValue,
      };

    case ADD_BIO_NEW_USER:
      return {
        ...state,
        bioNewUser: action.newValue,
      };

    case ADD_MAIL_NEW_USER:
      return {
        ...state,
        mailNewUser: action.newValue,
      };

    case ADD_PHONE_NEW_USER:
      return {
        ...state,
        phoneNewUser: action.newValue,
      };

    case ADD_PICTURE_NEW_USER:
      return {
        ...state,
        pictureNewUser: action.newValue,
      };

    case CITY_FIND:
      return {
        ...state,
        isCityFind: action.newValue,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        userCreate: !state.userCreate,
      };

    case ADD_LATLNG_NEW_USER:
      return {
        ...state,
        latNewUser: action.newLat,
        lngNewUser: action.newLng,
      };

    case SAVE_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        // on passe en status connecté
        logged: true,
        // sécurité : on efface les identifiants dans le state dès qu'on n'en a plus besoin
        mailNewUser: '',
        // passwordNewUser: '',
      };

    case UPDATE_SETTINGS_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          mailNewUser: action.value,
        };
      }
      // si on arrive à cette ligne, c'est que forcément on n'est pas passé dans le if
      // => else implicite si on a un return dans le if
      return {
        ...state,
        passwordNewUser: action.value,
      };

      // when we click on disconnect
    case LOGOUT:
      return {
        ...state,
        logged: !state.logged,
        nbrAnimal: '',
        mailNewUser: '',
        randomUsersToDisplay: [],
        usersApi: [],
        lastnameNewUser: '',
        firstnameNewUser: '',
        idNewUser: 0,
        cityNewUser: '',
        usernameNewUser: '',
        passwordNewUser: '',
        checkedPasswordNewUser: '',
        genderNewUser: '',
        birthNewUser: '',
        bioNewUser: '',
        phoneNewUser: '',
        pictureNewUser: [],
        latNewUser: 45.8692,
        lngNewUser: 6.129,
        isCityFind: true,
        nbrUnreadMessage: 0,
        errorConnexion: false,
      };

    // Pour afficher le menu burger dans le page profil
    case SHOW_LINK:
      // on retourne un nouveau state dans lequel on a changé la valeur de inputMessage
      return {
        ...state,
        // modification(s) d'info(s) du state, ici on va chercher dans le payload de l'action
        showLink: !state.showLink,
      };

    // To display the popup delete
    case SHOW_DELETE_USER:
      return {
        ...state,
        // modification(s) d'info(s) du state, ici on va chercher dans le payload de l'action
        userDelete: !state.userDelete,
      };

    case DISPLAY_RANDOM_USER_INFO:
      return {
        ...state,
        randomUsersToDisplay: action.value,
      };

    // To save the connected user info in the state
    case DISPLAY_INFO_CONNECTED_USER:
      return {
        ...state,
        lastnameNewUser: action.lastname,
        firstnameNewUser: action.firstname,
        cityNewUser: action.city,
        usernameNewUser: action.nickname,
        genderNewUser: action.gender,
        idNewUser: action.id,
        birthNewUser: action.birthdate,
        bioNewUser: action.bio,
        mailNewUser: action.email,
        phoneNewUser: action.phone,
        pictureNewUser: action.picture,
        latNewUser: action.latitude,
        lngNewUser: action.longitude,
        nbrAnimal: action.nbrAnimal,
        nbrUnreadMessage: action.nbrUnreadMessage,
      };

      // To display new message form
    case IS_MESS_FORM_OPENED:
      return {
        ...state,
        messFormOpen: !state.messFormOpen,
      };

    case IS_REP_FORM_OPENED:
      return {
        ...state,
        repFormOpen: !state.repFormOpen,
      };

      // To display or hidden loader
    case DISPLAY_LOADER:
      return {
        ...state,
        dislpayLoader: action.value,
      };

    // To stock all users of the BDD in the state
    case STOCK_USERS:
      return {
        ...state,
        usersApi: action.users,
      };

    case ERROR_CONNEXION:
      return {
        ...state,
        errorConnexion: !action.errorConnexion,
      };

    // To stock id of watched user in the state
    case STOCK_ID_WATCHED_USER:
      return {
        ...state,
        watchId: action.id,
      };

    // To display the succes message when a user is deleted and logout him
    case USER_DELETED:
      return {
        ...state,
        userDeleted: !state.userDeleted,
      };

    case CHANGE_SEXE_USER:
      return {
        ...state,
        userGender: action.gender,
      };

    case SHOW_USER_FILTER:
      return {
        ...state,
        showFilter: !state.showFilter,
      };

      // update of the number of unread messages
    case STOCK_UPDATE_UNREAD:
      return {
        ...state,
        nbrUnreadMessage: action.value,
      };

    case STOCK_LAST_USER:
      return {
        ...state,
        lastUser: action.value,
      };

    case CONNEXION_FORM_RESET:
      return {
        ...state,
        mailNewUser: '',
        passwordNewUser: '',
      };

    case RESET_USER_VALUE:
      return {
        ...state,
        lastnameNewUser: '',
        firstnameNewUser: '',
        cityNewUser: '',
        usernameNewUser: '',
        bioNewUser: '',
        mailNewUser: '',
        phoneNewUser: '',
      };

    default:
      return state;
  }
};

export default userReducer;
