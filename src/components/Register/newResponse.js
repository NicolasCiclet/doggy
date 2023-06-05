import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Message, TextArea,
} from 'semantic-ui-react';
import {
  getAllConversations, isMessageSend, logoutCurrentMessage, postUsermessage, userSendMessage,
} from '../../actions/message';

import './mess-response.scss';

// New Message FORM
const NewResponse = ({
  idUser, nameUser, handleRepClick, index,
}) => {
  const dispatch = useDispatch();
  const messageSend = useSelector((state) => state.message.isMessageSend);
  const handleFormSubmit = () => {
    // console.log('new message send');
    dispatch(postUsermessage());
    dispatch(logoutCurrentMessage());
  };

  return (
    <>
      {/* success message when messageSend is true */}
      {messageSend && (
        // I add an ID to get priority on the semantic's css
        <Form success className="register-success" id="message-success">
          <Message
            success
            header="Message envoyé"
            content={`${nameUser} sera notifié(e)`}
            onDismiss={() => {
              dispatch(isMessageSend(false));
              handleRepClick(index);
              // displays the new message immediately
              dispatch(getAllConversations());
            }}
          />
        </Form>
      )}
      {!messageSend && (
        <section className="new-message">
          <div className="register">
            <h1>Répondre à {nameUser}</h1>
            <Form>

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
              <Button control={Button} animated="fade" onClick={handleFormSubmit}>
                <Button.Content visible>Envoyer</Button.Content>
                <Button.Content hidden>Envoyer</Button.Content>
              </Button>

            </Form>

          </div>
        </section>
      )}
    </>
  );
};

NewResponse.propTypes = {
  idUser: PropTypes.number.isRequired,
  nameUser: PropTypes.number.isRequired,
  handleRepClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default NewResponse;
