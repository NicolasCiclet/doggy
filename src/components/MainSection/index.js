import { useSelector } from 'react-redux';
import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';
import Map from './Map';

import './main-section.scss';

const MainSection = () => {
  const main = useSelector((state) => state.nav.main);
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <div className="mainSection">
      <div className="mainSection-map">
        <Map />
      </div>
      <div className="mainSection-users">
        {isLogged && (main === 'meeting') && (<AllUsers />)}
        {isLogged && (main === 'event') && (<AllEvents />)}
      </div>
    </div>
  );
};

export default MainSection;
