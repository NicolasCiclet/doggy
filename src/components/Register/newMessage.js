import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';

import './message.scss';

// New Message FORM
const NewMessage = () => {
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
            // onChange={(event) => {
            //   dispatch(describNewEvent(event.target.value));
            // }}
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

export default NewMessage;
