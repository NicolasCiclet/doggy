// == Import
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCityApi } from '../../actions/city';
import Connect from '../Connect';
import UserRegister from '../Register/newUser';
import DogRegister from '../Register/newDog';
import Footer from '../Footer';
import Header from '../Header';
import MainSection from '../MainSection';
import Menu from '../Menu';
import Welcome from '../Welcome';
import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCityApi());
  // });
  return (
    // Here is the main div, with all components
    <div className="app">
      <Header />
      <Menu />
      <Welcome />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/connexion" element={<Connect />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/register/dog" element={<DogRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
