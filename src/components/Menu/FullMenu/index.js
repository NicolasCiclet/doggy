import { NavLink } from 'react-router-dom';
import '../menu.scss';

const FullMenu = () => (
  <>
    {/* // all buttons have same className */}
    <NavLink
      className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      to="/meeting"
    >
      Rencontre
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      to="/walk"
    >
      Balade
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      to="/event"
    >
      Evènement
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      to="/professional"
    >
      Professionel
    </NavLink>
  </>
);

export default FullMenu;
