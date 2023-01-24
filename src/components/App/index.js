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
import Map from '../Map';
import Menu from '../Menu';
import Welcome from '../Welcome';
import Profil from '../Profil';
import About from '../About';
import Contacts from '../Contacts';
import LegalMentions from '../LegalMentions';
import './styles.scss';

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
        <Route path="/Connect" element={<Connect />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/LegalMentions" element={<LegalMentions />} />
      </Routes>
      <UserRegister />
      <DogRegister />
      <Map />
      <MainSection />
      <Footer />
    </div>
  );
}

// == Export
export default App;
