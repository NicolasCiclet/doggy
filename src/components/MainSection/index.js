import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';

import './main-section.scss';
import Register from './Register';

const MainSection = () => (
  <div className="mainSection">
    <Register />
    {/* <AllUsers />
    <AllEvents /> */}
  </div>
);

export default MainSection;
