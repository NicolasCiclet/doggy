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
import Map from '../Map';
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
      <UserRegister />
      <DogRegister />
      <Routes>
        <Route path="" element={Connect} />
      </Routes>
      <Map />
      <MainSection />
      <Footer />
    </div>
  );
}

// == Export
export default App;
