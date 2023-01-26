// == Import
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getCityApi } from '../../actions/city';
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

// == Composant
function App() {
  const logged = useSelector((state) => state.user.logged);

  return (
    // Here is the main div, with all components
    <div className="app">
      <Header />
      <Menu />
      {!logged && (<Welcome />)}
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/connexion" element={<Connect />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/update-profile" element={<UpdateUser />} />
        <Route path="/register/dog" element={<DogRegister />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/mentions" element={<LegalMentions />} />
        <Route path="/event/new" element={<NewEvent />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default App;
