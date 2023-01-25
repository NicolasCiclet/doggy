import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <div className="footer-main">
    <Link to="/about">
      <span className="footer-link">A propos</span>
    </Link>
    <Link to="/contact">
      <span className="footer-link">Contacts</span>
    </Link>
    <Link to="/mentions">
      <span className="footer-link">Mentions Légales</span>
    </Link>
  </div>
);

export default Footer;
