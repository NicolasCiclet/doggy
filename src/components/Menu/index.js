import { useSelector } from 'react-redux';
import FullMenu from './FullMenu';
import LightMenu from './LightMenu';

import './menu.scss';

function Menu() {
  const logged = useSelector((state) => state.user.logged);
  return (
    <>
      {!logged && (
      <div className="menu">
        <LightMenu />
      </div>
      )}
      {logged && (
      <div className="menu">
        <FullMenu />
      </div>
      )}
    </>
  );
}

export default Menu;
