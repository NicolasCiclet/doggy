import { useDispatch } from 'react-redux';
import { Button, Form, TextArea } from 'semantic-ui-react';
import {
  contactFormMail, contactFormMessage, contactFormName, contactFormReset
} from '../../actions/message';
import './contacts.scss';

const Contacts = () => {
  const dispatch = useDispatch();
  return (
    <div className="contact">
      <p>Contactez-nous</p>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log('submit !');
        dispatch(contactFormReset());
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
  );
};

export default Contacts;
