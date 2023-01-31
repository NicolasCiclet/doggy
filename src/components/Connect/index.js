/* purpose : call the API get to authenticate. We need to use a redux middleware.
- we want to make redux "react" when we submit the form: dispatch an action.
- setting up the middleware, sending the request (with Axios)
- processing the response :
  - store information in the state to know if we are authenticate.
  - adapt the display: return to the home page with a welcome message.
*/
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Field from 'src/components/Connect/Field';

import { submitLogin, updateSettingsField } from '../../actions/user';
import MainSection from '../MainSection';

import './connect.scss';

const Connect = () => {
  // I set up my controlled fields for mail and password
  const isLogged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();
  const emailValue = useSelector((state) => state.user.mailNewUser);
  const passwordValue = useSelector((state) => state.user.passwordNewUser);

  // to check the number of animals in the user
  const nbrAnimal = useSelector((state) => state.user.nbrAnimal);

  const errorConnexion = useSelector((state) => state.user.errorConnexion);

  const dispatch = useDispatch();

  // condition if user is logged and has at least one animal
  useEffect(() => {
    if (isLogged && (nbrAnimal > 0)) {
      navigate('/');
    }
    // condition if user is logged but doesn't have any pets yet
    // He's redirected to the form for adding an animal
    else if (isLogged && (nbrAnimal === 0)) {
      navigate('/register/dog');
    }
  }, [nbrAnimal]);

  return (
    <>
      <div className="settings">
        {errorConnexion && <h1 className="settings-title-error">Veuillez vérifier vos identifiants</h1>}
        <h1 className="settings-title">Connexion</h1>
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(submitLogin());
          }}
        >
          <Field
            identifier="email"
            placeholder="cestlamour@laplage.net"
            label="E-mail"
            value={emailValue}
            changeField={(identifier, newValue) => {
              // on constate que le paramètre identifier est rempli automatiquement avec
              // la valeur qu'on a fournie pour la prop identifier.
              // Et value contient la nouvelle valeur du champ, avec le nouveau caractère saisi
              // console.log(`changeField sur l'e-mail : identifier=${identifier}
              // newValue=${newValue}`);

              const action = updateSettingsField(identifier, newValue);
              dispatch(action);
            }}
          />
          <Field
            identifier="password"
            placeholder="mot de passe"
            label="Mot de passe"
            type="password"
            value={passwordValue}
            changeField={(identifier, newValue) => {
              const action = updateSettingsField(identifier, newValue);
              dispatch(action);
            }}
          />
          <button type="submit" className="settings-submit">Login</button>
        </form>
      </div>
      <MainSection />
    </>
  );
};

export default Connect;
