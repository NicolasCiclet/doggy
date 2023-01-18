// == Import
import Header from '../Header';
import MainSection from '../MainSection';
import Menu from '../Menu';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <MainSection />
    </div>
  );
}

// == Export
export default App;
