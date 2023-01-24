import { NavLink } from 'react-router-dom';
import '../menu.scss';

const FullMenu = () => (
  <>
    {/* // all buttons have same className */}
    <a className="menu-link" href="">Rencontre</a>
    <a className="menu-link" href="">Balade</a>
    <a className="menu-link" href="">Evènement</a>
    <a className="menu-link" href="">Professionel</a>
    <NavLink
      className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      to="/register"
    >
      Rencontre
    </NavLink>
  </>
);

export default FullMenu;
