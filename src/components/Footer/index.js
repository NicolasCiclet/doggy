import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <div className="footer-main">
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
      <span className="footer-link">Contacts</span>
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
