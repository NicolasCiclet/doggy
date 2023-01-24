import { Link } from 'react-router-dom';
import '../menu.scss';

const LightMenu = () => (
  <>
    <p className="menu-para">Envie de rencontres et de balades ?</p>
    <Link
      className="menu-link"
      to="/register"
    >
      Inscrivez vous
    </Link>
  </>
);

export default LightMenu;
