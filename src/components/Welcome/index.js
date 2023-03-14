// import
import { useSelector, useDispatch } from 'react-redux';
import { Form, Message } from 'semantic-ui-react';
import { addNewUser, userDeleted } from '../../actions/user';
import './welcome.scss';

// == Composant Welcome : this purpose is to display a welcome message and the last user registered
function Welcome() {
  const dispatch = useDispatch();
  const userDelete = useSelector((state) => state.user.userDeleted);
  const name = useSelector((state) => state.user.usernameNewUser);
  const userCreate = useSelector((state) => state.user.userCreate);
  // I create my array with all my users and an empty object for my lastUser
  const users = useSelector((state) => state.user.usersToDisplay);
  const lastUser = useSelector((state) => state.user.lastUser);
  const url = useSelector((state) => state.nav.url);
  // let lastUser = {};

  // // function to find the last user registered, with all the users in argument
  // function findMaxId(allUsers) {
  //   // console.log(allUsers);
  //   // I select the max id in my array
  //   const maxId = (Math.max(...allUsers.map((user) => user.id)));
  //   // console.log(maxId);
  //   // I find the user that has the max id : he is the last user registered
  //   lastUser = allUsers.find((user) => user.id === maxId);
  //   // console.log(result);
  //   return lastUser;
  // }

  // findMaxId(users);

  return (
    <>
      {/* success message when userCreate is true */}
      {userCreate && (
        <Form success className="register-success">
          <Message
            success
            header={`Inscription Réussie - Bienvenue ${name}`}
            content="Vous pouvez maintenant vous connecter"
            onDismiss={() => {
              dispatch(addNewUser());
            }}
          />
        </Form>
      )}
      { userDelete && (
        <Form success className="register-success">
          <Message
            success
            header="Profil supprimé avec succès"
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
