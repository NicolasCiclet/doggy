import { useSelector, useDispatch } from 'react-redux';

import './delete.scss';

const Delete = () => {
  // Je récupère la valeur deleteConfirm dans le state pour savoir quand afficher ou non ma pop up
  const isOpen = useSelector((state) => state.user.deleteConfirm);
  console.log(isOpen);
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
              dispatch(actionQuiSupprimeViaAPI);
            }}
          >
            Oui
          </button>
          <button
            type="button"
            className="delete-no"
            onClick={() => {
              dispatch(actionQuiChangeisOpenEnFalse);
            }}
          >
            Non
          </button>
        </div>
      )}
    </div>
  );
};

export default Delete;
