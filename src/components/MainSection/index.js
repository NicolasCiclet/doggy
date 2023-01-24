import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';
import Map from './Map';

import './main-section.scss';

const MainSection = () => (
  <div className="mainSection">
    <Map />
    <AllUsers />
    <AllEvents />
  </div>
);

export default MainSection;
