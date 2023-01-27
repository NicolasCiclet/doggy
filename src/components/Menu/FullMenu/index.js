import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeMain } from '../../../actions/nav';
import '../menu.scss';

const FullMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* // all buttons have same className */}
      <NavLink
        className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        to="/meeting"
        onClick={() => dispatch(changeMain('meeting'))}
      >
        Rencontre
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        to="/walk"
        onClick={() => dispatch(changeMain('walk'))}
      >
        Balade
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        to="/event"
        onClick={() => dispatch(changeMain('event'))}
      >
        Evènement
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        to="/professional"
        onClick={() => dispatch(changeMain('professional'))}
      >
        Professionel
      </NavLink>
    </>
  );
};

export default FullMenu;
