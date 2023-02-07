import { useDispatch, useSelector } from 'react-redux';
import { activeConversation, getAllConversations, getOneConversation, patchreadMessages, showOneConversation, stockIdConversation } from '../../../actions/message';
import logoMail from '../conversation.svg';
import OneConversation from './oneConversation';

import './conversation.scss';
import { updateUnreadMessage } from '../../../actions/user';

const AllConversations = () => {
  const dispatch = useDispatch();
  const showConversation = useSelector((state) => state.message.activeConversation);
  const allConversations = useSelector((state) => state.message.allConversationsApi);
  const unreadMessages = useSelector((state) => state.message.unreadMessages);
  const userNickname = useSelector((state) => state.user.usernameNewUser);


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
                console.log(conversation);
                dispatch(patchreadMessages());
                dispatch(getAllConversations());
                dispatch(updateUnreadMessage());
              }}
              className={conversation.id == showConversation ? 'conversation-open' : 'conversation'}
              key={conversation.id}
            >
              <img className="logo-mail" src={logoMail} alt="message" />
              {conversation.users[1].nickname} & {conversation.users[0].nickname}
              {/* {console.log(unreadMessages[conversation.id])} */}
              {unreadMessages[conversation.id].nbrUnreadMessage > 0 && (
              <div className="unreadMessage">{unreadMessages[conversation.id].nbrUnreadMessage}</div>
              )}

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
