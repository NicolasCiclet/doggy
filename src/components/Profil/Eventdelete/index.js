import { useSelector, useDispatch } from 'react-redux';
import { showDeleteEvent, deleteEvent } from '../../../actions/event';

import '../delete.scss';

const Eventdelete = () => {
  // Je récupère la valeur deleteConfirm dans le state pour savoir quand afficher ou non ma pop up
  const isOpen = useSelector((state) => state.event.eventDelete);
  const dispatch = useDispatch();

  return (
    <div>
      {isOpen && (
        <div className="deletePopup">
          <p>Etes-vous sur de vouloir supprimer votre événement ?</p>
          <p>Cette action est irréversible !</p>
          <button
            type="button"
            className="delete-yes"
            onClick={() => {
              dispatch(deleteEvent());
              dispatch(showDeleteEvent());
            }}
          >
            Oui
          </button>
          <button
            type="button"
            className="delete-no"
            onClick={() => {
              dispatch(showDeleteEvent());
            }}
          >
            Non
          </button>
        </div>
      )}
    </div>
  );
};

export default Eventdelete;
