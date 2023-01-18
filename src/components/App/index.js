// == Import
import Footer from '../Footer';
import Header from '../Header';
import MainSection from '../MainSection';
import Menu from '../Menu';
import Welcome from '../Welcome';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Welcome />
      <MainSection />
      <Footer />
    </div>
  );
}

// == Export
export default App;
