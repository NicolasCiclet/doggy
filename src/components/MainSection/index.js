import { useSelector } from 'react-redux';
import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';
import Map from './Map';

import './main-section.scss';
import RandomUser from './Users/randomUser';
import RandomEvent from './Events/randomEvent';

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
        {main === '' && <RandomUser />}
        {main === '' && <RandomEvent />}
      </div>
    </div>
  );
};

export default MainSection;
