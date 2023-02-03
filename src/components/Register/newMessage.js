import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { userSendMessage } from '../../actions/message';

import './message.scss';

// New Message FORM
const NewMessage = ({ idUser }) => {
  const dispatch = useDispatch();
  return (
    <section className="new-message">
      <div className="register">
        <h1>Nouveau message</h1>
        <Form onSubmit={(event) => {
          event.preventDefault();
          console.log('new message send');
          // dispatch(submitFormNewEvent());
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
  );
};

NewMessage.propTypes = {
  idUser: PropTypes.number.isRequired,
};

export default NewMessage;
