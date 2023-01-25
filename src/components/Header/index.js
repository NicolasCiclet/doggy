// == Import
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerLogo from './header_logo.svg';
import './header.scss';
import { logOut } from '../../actions/user';

// == Composant
function Header() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="header-main">
      <Link to="/">
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
              <span className="header-nav" onClick={() => dispatch(logOut())}>Déconnexion</span>
            </Link>
            <Link to="/profil">
              <span className="header-nav">Profil</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// == Export
export default Header;
