import { useSelector, useDispatch } from 'react-redux';
import { showDeleteUser, deleteUser } from '../../../actions/user';

import './userdelete.scss';

const Userdelete = () => {
  // Je récupère la valeur deleteConfirm dans le state pour savoir quand afficher ou non ma pop up
  const isOpen = useSelector((state) => state.user.userDelete);
  const dispatch = useDispatch();

  return (
    <div>
      {isOpen && (
        <div className="deletePopup">
          <p>Etes-vous sur de vouloir supprimer ?</p>
          <button
            type="button"
            className="delete-yes"
            onClick={() => {
              dispatch(deleteUser());
            }}
          >
            Oui
          </button>
          <button
            type="button"
            className="delete-no"
            onClick={() => {
              dispatch(showDeleteUser());
            }}
          >
            Non
          </button>
        </div>
      )}
    </div>
  );
};

export default Userdelete;
