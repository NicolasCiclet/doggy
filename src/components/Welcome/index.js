// import
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
import { addNewUser, resetUserValue, userDeleted } from '../../actions/user';
import useCountdown from '../CountDown';
import './welcome.scss';

// == Composant Welcome : this purpose is to display a welcome message and the last user registered
function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDelete = useSelector((state) => state.user.userDeleted);
  const name = useSelector((state) => state.user.usernameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  // I create my array with all my users and an empty object for my lastUser
  const lastUser = useSelector((state) => state.user.lastUser);
  const url = useSelector((state) => state.nav.url);

  const countdown = useCountdown(
    4,
    userCreate || userDelete,
    () => {
      if (userCreate) {
        dispatch(addNewUser());
        console.log('nb 3');
        navigate('/profile');
      }
      else if (userDelete) {
        dispatch(userDeleted());
        navigate('/profile');
      }
    },
  );

  return (
    <>
      {/* success message when userCreate is true */}
      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header={`Bienvenue ${name}, vous pouvez vous connecter`}
            content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
            onDismiss={() => {
              dispatch(addNewUser());
              console.log('nb 4');
            }}
          />
        </Form>
      )}
      { userDelete && (
        <Form success className="register-success">
          <Message
            success
            header="Profil supprimé avec succès"
            content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
            onDismiss={() => {
              dispatch(userDeleted());
            }}
          />
        </Form>
      )}
      <div className="welcome">
        <div className="welcome-message">
          <h2 className="welcome-message-title">Bienvenue sur dO'ggy</h2>
          <p className="welcome-message-content">
            Découvrez les chemins de promenades à côté de chez vous
            et rencontrez d'autres passionnés avec qui échanger lors de moments de partage.
          </p>
        </div>
        <div className="welcome-newUser">
          <aside className="welcome-newUser-content">Bienvenue à {lastUser.firstname}, notre dernier membre inscrit&nbsp;!</aside>
          <img className="welcome-newUser-avatar" src={`${url}assets/images/${lastUser.picture}`} alt="New user avatar" />
        </div>
      </div>
    </>
  );
}

// == Export
export default Welcome;
