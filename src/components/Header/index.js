// == Import
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headerLogo from './header_logo.svg';
import './header.scss';

// == Composant
function Header() {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="header-main">
      <div className="header-logo">
        <h1>dO'ggy</h1>
        <img className="header-logo-img" src={headerLogo} alt="header logo" />
      </div>
      <div className="header-nav">
        {!logged && (
          <Link to="/Connect">
            <span className="header-nav">Connexion</span>
          </Link>
        )}
        {logged && (
          <>
            <Link to="">
              <span className="header-nav">Déconnexion</span>
            </Link>
            <Link to="/Profil">
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
