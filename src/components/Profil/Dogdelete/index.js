import { useSelector, useDispatch } from 'react-redux';
import { showDeleteDog, deleteDog } from '../../../actions/dog';

import '../delete.scss';

const Dogdelete = () => {
  // Je récupère la valeur deleteConfirm dans le state pour savoir quand afficher ou non ma pop up
  const isOpen = useSelector((state) => state.dog.dogDelete);
  const dispatch = useDispatch();

  return (
    <div>
      {isOpen && (
        <div className="deletePopup">
          <p>Etes-vous sur de vouloir supprimer votre chien ?</p>
          <button
            type="button"
            className="delete-yes"
            onClick={() => {
              dispatch(deleteDog());
              dispatch(showDeleteDog());
            }}
          >
            Oui
          </button>
          <button
            type="button"
            className="delete-no"
            onClick={() => {
              dispatch(showDeleteDog());
            }}
          >
            Non
          </button>
        </div>
      )}
    </div>
  );
};

export default Dogdelete;
