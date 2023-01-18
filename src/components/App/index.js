// == Import
import Header from '../Header';
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
    </div>
  );
}

// == Export
export default App;
