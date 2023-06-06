import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, TextArea, Message,
} from 'semantic-ui-react';
import { validate } from 'react-email-validator';
import {
  contactFormMail, contactFormMessage, contactFormName, contactSendMail, isMessageSend,
} from '../../actions/message';
import './contacts.scss';
import useCountdown from '../CountDown';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messageSend = useSelector((state) => state.message.isMessageSend);
  const mailAdresse = useSelector((state) => state.message.contactMail);

  validate(mailAdresse);

  // Use component useCountdown for all success messages.
  const countdown = useCountdown(4, messageSend, () => {
    dispatch(isMessageSend(false));
    navigate('/contact');
  });

  return (
    <>
      {/* success message when message is send */}
      {messageSend && (
        <Form success className="register-success">
          <Message
            success
            header="Message envoyé avec succès"
            content={`Cette fenêtre se fermera dans ${countdown} seconde${countdown > 1 ? 's' : ''}.`}
            onDismiss={() => {
              dispatch(isMessageSend(false));
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
            if ((validate(mailAdresse))) {
              dispatch(contactSendMail());
            }
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
              // I use a ternary condition to show or hide the error message
              error={validate(mailAdresse) ? false : {
                content: 'Merci d\'entrer un email valide',
              }}
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
