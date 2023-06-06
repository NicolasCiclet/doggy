import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Message, TextArea,
} from 'semantic-ui-react';
import { isMessageSend, logoutCurrentMessage, postUsermessage, userSendMessage } from '../../actions/message';
import { isMessFormOpened } from '../../actions/user';
import useCountdown from '../CountDown';

import './mess-response.scss';

// New Message FORM
const NewMessage = ({ idUser, nameUser }) => {
  const dispatch = useDispatch();
  const messageSend = useSelector((state) => state.message.isMessageSend);

  // Use component useCountdown for all success messages.
  const countdown = useCountdown(4, messageSend, () => {
    dispatch(isMessageSend(false));
    dispatch(isMessFormOpened());
  });

  return (
    <>
      {/* success message when messageSend is true */}
      {messageSend && (
        // I add an ID to get priority on the semantic's css
        <Form success className="register-success" id="message-success">
          <Message
            success
            header={`Message envoyé à ${nameUser}`}
            content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
            onDismiss={() => {
              dispatch(isMessageSend(false));
              dispatch(isMessFormOpened());
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
              dispatch(postUsermessage());
              dispatch(logoutCurrentMessage());
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
              <Button control={Button} animated="fade">
                <Button.Content visible>Valider</Button.Content>
                <Button.Content hidden>Valider</Button.Content>
              </Button>

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
