import { useDispatch, useSelector } from 'react-redux';
import { activeConversation, getOneConversation, showOneConversation, stockIdConversation } from '../../../actions/message';
import logoMail from '../conversation.svg';
import OneConversation from './oneConversation';

import './conversation.scss';

const AllConversations = () => {
  const dispatch = useDispatch();
  const showConversation = useSelector((state) => state.message.activeConversation);
  const allConversations = useSelector((state) => state.message.allConversationsApi);
  const idUser = useSelector((state) => state.user.idNewUser);
  console.log(allConversations);
  return (
    <div className="profil-section" id="mes-messages">
      <div className="profil-header">
        <h1 className="profil-h1">Mes messages</h1>
      </div>
      <div className="profil-main-message">
        {allConversations.map((conversation) => (
          <>
            <p
              onClick={() => {
                // dispatch(showOneConversation());
                dispatch(activeConversation(conversation.id));
                console.log(conversation.id);
                // dispatch(getOneConversation());
              }}
              className={conversation.id == showConversation ? 'conversation-open' : 'conversation'}
              key={conversation.id}
            >
              <img className="logo-mail" src={logoMail} alt="message" />
              {conversation.users[1].nickname}
            </p>
            {(showConversation == conversation.id)
            && <OneConversation {...conversation} messages={conversation.messages} />}
          </>
        ))}

        {/* {openConversation && (
          <OneConversation />
        )} */}
      </div>
    </div>
  );
};

export default AllConversations;
