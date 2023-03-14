import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { activeConversation, getAllConversations, patchreadMessages } from '../../../actions/message';
import logoMail from '../conversation.svg';
import OneConversation from './oneConversation';

import './conversation.scss';
import { updateUnreadMessage } from '../../../actions/user';

// Component with all conversations
const AllConversations = () => {
  const dispatch = useDispatch();
  const allConversations = useSelector((state) => state.message.allConversationsApi);
  const unreadMessages = useSelector((state) => state.message.unreadMessages);

  // each element of the new array will be initialized to false
  const [isOpen, setIsOpen] = useState(allConversations.map(() => false));
  const handleClick = (index) => {
    /* Create a copy of isOpen with spread operator
    To respect the principle of immutability, which consists in not modifying the data directly,
    but in creating a new modified copy from the original */
    const newOpenState = [...isOpen];
    // on click we pass the index as argument and we invert the value
    newOpenState[index] = !isOpen[index];
    // we update the state of isOpen
    setIsOpen(newOpenState);
  };

  return (
    <div className="profil-section" id="mes-messages">
      <div className="profil-header">
        <h1 className="profil-h1">Mes messages</h1>
      </div>
      <div className="profil-main-message">
        {allConversations.map((conversation, index) => (
          <>
            <p
              onClick={() => {
                // sends to state the conversation's id
                dispatch(activeConversation(conversation.id));
                // tell to the back that the messages are read with the conversation's id
                dispatch(patchreadMessages());
                // gets the number of unread messages updated per conversation
                dispatch(getAllConversations());
                // gets the number of unread messages updated for all conversations
                dispatch(updateUnreadMessage());
                // we call the function by passing it the index
                handleClick(index);
              }}
              // we use a ternary condition
              className={isOpen[index] ? 'conversation-open' : 'conversation'}
              key={conversation.id}
            >
              <img className="logo-mail" src={logoMail} alt="message" />
              {/* The name of the 2 persons */}
              {conversation.users[1].nickname} & {conversation.users[0].nickname}
              {/* If the number of unread messages > 0, the pastille is displayed */}
              {unreadMessages[conversation.id].nbrUnreadMessage > 0 && (
              <div className="unreadMessage">{unreadMessages[conversation.id].nbrUnreadMessage}</div>
              )}

            </p>
            {/* if isOpen[index] is true, the conversation is displayed */}
            {isOpen[index]
            // I use a spread operator to distribute all the properties
            && <OneConversation {...conversation} messages={conversation.messages} />}
          </>
        ))}
      </div>
    </div>
  );
};

export default AllConversations;
