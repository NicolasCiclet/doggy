import { Link } from 'react-router-dom';
import './footer.scss';
import backLogo from './loggo_chris.png';

const Footer = () => (
  <div className="footer-main">
    <Link to="/back">
      <img className="backLogo" src={backLogo} alt="header logo" />
    </Link>
    <Link
      to="/about"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <span className="footer-link">A propos</span>
    </Link>
    <Link to="/contact">
      <span className="footer-link">Contact</span>
    </Link>
    <Link
      to="/mentions"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <span className="footer-link">Mentions Légales</span>
    </Link>
  </div>
);

export default Footer;
