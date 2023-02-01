import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';
import Map from './Map';

import RandomUser from './Users/randomUser';
import RandomEvent from './Events/randomEvent';
import AllPro from './Professional/allPro';
import './main-section.scss';
import AllWalks from './Walks/allWalks';

const MainSection = () => {
  // const dispatch = useDispatch();
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
        {isLogged && (main === 'professional') && (<AllPro />)}
        {isLogged && (main === 'walk') && (<AllWalks />)}

        {(main === '') && <RandomUser />}
        {(main === '') && <RandomEvent />}

      </div>
    </div>
  );
};

export default MainSection;
