// import
import { useSelector } from 'react-redux';
import './welcome.scss';

// == Composant Welocme : this purpose is to display a welcome message and the last user registered
function Welcome() {
  // I create my array with all my users
  const users = useSelector((state) => state.user.usersToDisplay);
  let lastUser = {};

  // function to find the last user registered, with all the users in argument
  function findMaxId(allUsers) {
    // console.log(allUsers);
    // I select the max id in my array
    const maxId = (Math.max(...allUsers.map((user) => user.id)));
    // console.log(maxId);
    // I find the user that has the max id : he is the last user registered
    lastUser = allUsers.find((user) => user.id === maxId);
    // console.log(result);
    return lastUser;
  }

  findMaxId(users);

  return (
    <div className="welcome">
      <div className="welcome-message">
        <h2 className="welcome-message-title">Bienvenue sur dO'ggy</h2>
        <p className="welcome-message-content">
          Découvrez les chemins de promenades à côté de chez vous
          et rencontrez d'autres passionnés avec qui échanger lors de moments de partage.
        </p>
      </div>
      <div className="welcome-newUser">
        <aside className="welcome-newUser-content">Bienvenue à {lastUser.firstname}, notre dernier membre inscrit !</aside>
        <img className="welcome-newUser-avatar" src={lastUser.picture} alt="New user avatar" />
      </div>
    </div>
  );
}

// == Export
export default Welcome;
