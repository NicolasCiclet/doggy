import FullMenu from './FullMenu';
import LightMenu from './LightMenu';
import './menu.scss';

const Menu = () => (
  <>
    <div className="menu">
      <LightMenu />
    </div>
    <div className="menu">
      <FullMenu />
    </div>
  </>
);

export default Menu;
