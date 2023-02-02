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
import EventPage from '../MainSection/Events/eventPage';
import { getRandomUserInfo } from '../../actions/user';
import Loader from '../MainSection/Loader';
import ProPage from '../MainSection/Professional/proPage';
import ItineraryPage from '../MainSection/Itineraries/itineraryPage';
import Error from '../Error';

// == Composant
function App() {
  const logged = useSelector((state) => state.user.logged);
  const loader = useSelector((state) => state.user.dislpayLoader);
  const isError = useSelector((state) => state.nav.showError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomUserInfo());
  }, []);
  return (
    // Here is the main div, with all components
    <div className="app">
      <Header />
      {!isError && <Menu />}
      {loader && (<Loader />)}
      {(!logged && !isError) && (<Welcome />)}

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/meeting" element={<MainSection />} />
        <Route path="/event" element={<MainSection />} />
        <Route path="/itinerary" element={<MainSection />} />
        <Route path="/professional" element={<MainSection />} />
        <Route path="/connexion" element={<Connect />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/profile/update/user/:id" element={<UpdateUser />} />
        <Route path="/profile/update/animal/:id" element={<UpdateDog />} />
        <Route path="/profile/update/event/:id" element={<UpdateEvent />} />
        <Route path="/register/dog" element={<DogRegister />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/mentions" element={<LegalMentions />} />
        <Route path="/event/new" element={<NewEvent />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/professional/:id" element={<ProPage />} />
        <Route path="/itinerary/:id" element={<ItineraryPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default App;
