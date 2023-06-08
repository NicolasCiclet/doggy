import moment from 'moment';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

const OneConversation = ({ messages }) => {
  const idUser = useSelector((state) => state.user.idNewUser);
  // sort messages by date
  const messageOrderByDate = messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  console.log(messageOrderByDate);
  return (
    <div className="one-conversation">
      {messageOrderByDate.map((message) => (
        <div className="one-message" key={message.id}>
          {/* allows to classify messages as received or sent */}
          <p className={message.author.id === idUser ? 'sent' : 'received'}>
            {message.content} <span className="message-date">{moment(message.createdAt).locale('fr').format('LLLL')}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

OneConversation.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default OneConversation;
