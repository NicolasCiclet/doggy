import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

const OneConversation = ({ id, messages }) => {
  console.log(messages);
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.user.idNewUser);
  return (
    <div className="one-conversation">
      {messages.map((message) => (
        <div className="one-message">
          <p className={message.author.id == idUser ? 'sent' : 'received'}>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

OneConversation.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  id: PropTypes.number.isRequired,
};

export default OneConversation;
