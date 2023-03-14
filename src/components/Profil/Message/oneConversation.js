import moment from 'moment';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const OneConversation = ({ messages }) => {
  const idUser = useSelector((state) => state.user.idNewUser);
  return (
    <div className="one-conversation">
      {messages.map((message) => (
        <div className="one-message">
          {/* allows to classify messages as received or sent */}
          <p className={message.author.id == idUser ? 'sent' : 'received'}>
            {message.content} <span className="message-date">{moment(message.createdAt).locale('fr').format('LLLL')}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

OneConversation.propTypes = {
  messages: PropTypes.string.isRequired,
};

export default OneConversation;
