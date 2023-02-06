import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, TextArea, Message,
} from 'semantic-ui-react';
import {
  contactFormMail, contactFormMessage, contactFormName, contactSendMail, isMessageSend,
} from '../../actions/message';
import './contacts.scss';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messageSend = useSelector((state) => state.message.isMessageSend);

  return (
    <>
      {/* success message when message is send */}
      {messageSend && (
        <Form success className="register-success">
          <Message
            success
            header="Message envoyé avec succès"
            onDismiss={() => {
              dispatch(isMessageSend());
              navigate('/contact');
            }}
          />
        </Form>
      )}
      {!messageSend && (
        <div className="contact">
          <p>Contactez-nous</p>
          <Form onSubmit={(event) => {
            event.preventDefault();
            console.log('submit !');
            dispatch(contactSendMail());
          }}
          >
            <Form.Input
              label="Nom"
              placeholder="Nom"
              onChange={(event) => {
                // console.log();
                dispatch(contactFormName(event.target.value));
              }}
            />
            <Form.Input
              label="Email"
              placeholder="joe@schmoe.com"
              onChange={(event) => {
                dispatch(contactFormMail(event.target.value));
              }}
            />
            <Form.Input
              label="Message"
              control={TextArea}
              placeholder="Message"
              onChange={(event) => {
                dispatch(contactFormMessage(event.target.value));
              }}
            />

            <Button control={Button} animated="fade">
              <Button.Content visible>Envoyer</Button.Content>
              <Button.Content hidden>Envoyer</Button.Content>
            </Button>

          </Form>
        </div>
      )}
    </>
  );
};

export default Contacts;
