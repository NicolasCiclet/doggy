import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';
import Map from './Map';

import './main-section.scss';

const MainSection = () => (
  <div className="mainSection">
    <div className="mainSection-map">
      <Map />
    </div>
    <div className="mainSection-users">
      <AllUsers />
      {/* <AllEvents /> */}
    </div>
  </div>
);

export default MainSection;
