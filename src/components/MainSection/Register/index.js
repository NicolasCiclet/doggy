import { useDispatch } from 'react-redux';
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react';
import './register.scss';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register">
      <h1>Création de compte</h1>
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log('submit !');
        // dispatch();
      }}
      >
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
            // onChange={(event) => {
            // console.log(`change : ${event.target.value}`);
            //   // inputChange(event.target.value);
            // }}
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder="Gender"
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Opinion"
          placeholder="Opinion"
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          error={{
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm"
          label="Label with htmlFor"
        />
      </Form>
    </div>
  );
};

export default Register;
