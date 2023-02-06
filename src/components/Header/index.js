// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerLogo from './header_logo.svg';
import './header.scss';
import { logOut } from '../../actions/user';
import { changeMain, showError } from '../../actions/nav';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const userPicture = useSelector((state) => state.user.pictureNewUser);
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
          <h1>dO'ggy</h1>
          <img className="header-logo-img" src={headerLogo} alt="header logo" />
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
            <img className="welcome-user-photo" src={`${url}assets/images/${userPicture}`} alt="user" />
          </>
        )}
      </div>
    </div>
  );
}

// == Export
export default Header;
