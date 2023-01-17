// == Import
import headerLogo from './header_logo.svg';
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <h1>dO'ggy</h1>
        <img className="header_logo_img" src={headerLogo} alt="header logo" />
      </div>
      <nav className="header_nav">
        <a href="#">Connexion</a>
        <a href="#">Déconnexion</a>
        <a href="#">Profil</a>
      </nav>
    </div>
  );
}

// == Export
export default Header;
