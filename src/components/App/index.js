// == Import
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

// == Composant
function App() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  // console.log(logged);

  // useEffect(() => {
  //   dispatch(getCityApi());
  // });
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
