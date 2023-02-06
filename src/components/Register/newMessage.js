import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Form, Message, TextArea } from 'semantic-ui-react';
import { isMessageSend, postUsermessage, userSendMessage } from '../../actions/message';
import { isMessFormOpened } from '../../actions/user';

import './message.scss';

// New Message FORM
const NewMessage = ({ idUser, nameUser }) => {
  const dispatch = useDispatch();
  const messageSend = useSelector((state) => state.message.isMessageSend);
  return (
    <>
      {/* success message when messageSend is true */}
      {messageSend && (
        // I add an ID to get priority on the semantic's css
        <Form success className="register-success" id="message-success">
          <Message
            success
            header="Message envoyé avec succès"
            content={`${nameUser} sera notifié`}
            onDismiss={() => {
              dispatch(isMessageSend(false));
              dispatch(isMessFormOpened(false));
            }}
          />
        </Form>
      )}
      {!messageSend && (
        <section className="new-message">
          <div className="register">
            <h1>Envoyer un message à {nameUser}</h1>
            <Form onSubmit={(event) => {
              event.preventDefault();
              console.log('new message send');
              dispatch(postUsermessage());
            }}
            >

              {/* Input for description */}
              <Form.Input
                className="add-new-event-description"
                control={TextArea}
                placeholder="Votre message..."
                onChange={(event) => {
                  dispatch(userSendMessage(event.target.value, idUser));
                }}
              />
              {/* Input for submit */}
              <Form.Input
                control={Button}
                content="Envoyer"
              />
            </Form>

          </div>
        </section>
      )}
    </>
  );
};

NewMessage.propTypes = {
  idUser: PropTypes.number.isRequired,
  nameUser: PropTypes.number.isRequired,
};

export default NewMessage;
