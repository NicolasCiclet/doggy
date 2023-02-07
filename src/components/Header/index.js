// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import headerLogo from './loggo_chris.png';
import './header.scss';
import { logOut } from '../../actions/user';
import { changeMain, showError } from '../../actions/nav';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const userPicture = useSelector((state) => state.user.pictureNewUser);
  const unreadMsg = useSelector((state) => state.user.nbrUnreadMessage);
  const url = useSelector((state) => state.nav.url);

  return (

    <div className="header-main">
      <Link
        to="/"
        onClick={() => {
          dispatch(changeMain(''));
          dispatch(showError(false));
        }}
      >
        <div className="header-logo">
          <span>d</span>
          <img className="header-logo-img" src={headerLogo} alt="header logo" />
          <span>ggy</span>
        </div>
      </Link>
      <div className="header-nav">
        {!logged && (
          <Link to="/connexion">
            <span className="header-nav">Connexion</span>
          </Link>
        )}
        {logged && (
          <>
            <Link to="/">
              <span
                className="header-nav"
                onClick={() => {
                  dispatch(changeMain(''));
                  // At Logout we delete the token in localStorage
                  dispatch(logOut());
                  localStorage.removeItem('UserToken');
                }}
              >
                Déconnexion
              </span>
            </Link>
            <Link to="/profile">
              <span className="header-nav">Profil</span>
            </Link>
            <div className="welcome-user">
              <img className="welcome-user-photo" src={`${url}assets/images/${userPicture}`} alt="user" />
              {unreadMsg > 0 && (
                <HashLink smooth to="/profile#mes-messages">
                  <div className="unreadMessage">{unreadMsg}</div>
                </HashLink>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// == Export
export default Header;
