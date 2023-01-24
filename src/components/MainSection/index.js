import AllEvents from './Events/allEvents';
import AllUsers from './Users/allUsers';

import './main-section.scss';
import UserRegister from './Register/newUser';
import DogRegister from './Register/newDog';

const MainSection = () => (
  <div className="mainSection">
    <UserRegister />
    <DogRegister />
    {/* <AllUsers />
    <AllEvents /> */}
  </div>
);

export default MainSection;
