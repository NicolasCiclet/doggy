// == Import : npm
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

// == Import : local
// Composants

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
