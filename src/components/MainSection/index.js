import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';

import './main-section.scss';

const MainSection = () => (
  <div className="mainSection">
    <AllUsers />
    <AllEvents />
  </div>
);

export default MainSection;
