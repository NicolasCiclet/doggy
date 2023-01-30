// == Import
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Connect from '../Connect';
import UserRegister from '../Register/newUser';
import DogRegister from '../Register/newDog';
import Footer from '../Footer';
import Header from '../Header';
import MainSection from '../MainSection';
import Menu from '../Menu';
import Welcome from '../Welcome';
import Profil from '../Profil';
import About from '../About';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';

import './styles.scss';
import NewEvent from '../Register/newEvent';
import UpdateUser from '../Register/updateUser';
import UpdateDog from '../Register/updateDog';
import UpdateEvent from '../Register/updateEvent';
import UserPage from '../MainSection/Users/userPage';
import { getRandomUserInfo } from '../../actions/user';

// == Composant
function App() {
  const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomUserInfo());
  }, []);
  return (
    // Here is the main div, with all components
    <div className="app">
      <Header />
      <Menu />
      {!logged && (<Welcome />)}
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/meeting" element={<MainSection />} />
        <Route path="/event" element={<MainSection />} />
        <Route path="/walk" element={<MainSection />} />
        <Route path="/professional" element={<MainSection />} />
        <Route path="/connexion" element={<Connect />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/profile/update/user" element={<UpdateUser />} />
        <Route path="/profile/update/animal" element={<UpdateDog />} />
        <Route path="/profile/update/event" element={<UpdateEvent />} />
        <Route path="/register/dog" element={<DogRegister />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/mentions" element={<LegalMentions />} />
        <Route path="/event/new" element={<NewEvent />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default App;
