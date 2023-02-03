// To add infos from contact form
export const CONTACT_FORM_MAIL = 'CONTACT_FORM_MAIL';
export const CONTACT_FORM_NAME = 'CONTACT_FORM_NAME';
export const CONTACT_FORM_MESSAGE = 'CONTACT_FORM_MESSAGE';
export const CONTACT_FORM_RESET = 'CONTACT_FORM_RESET';

// To add infos from user message form
export const USER_SEND_MESSAGE = 'USER_SEND_MESSAGE';

// To post message to API Back
export const POST_USER_MESSAGE = 'POST_USER_MESSAGE';

// To show or hide succes message
export const IS_MESSAGE_SEND = 'IS_MESSAGE_SEND';

// To add infos from contact form
export const contactFormName = (newValue) => ({
  type: CONTACT_FORM_NAME,
  value: newValue,
});
export const contactFormMail = (newValue) => ({
  type: CONTACT_FORM_MAIL,
  value: newValue,
});
export const contactFormMessage = (newValue) => ({
  type: CONTACT_FORM_MESSAGE,
  value: newValue,
});
export const contactFormReset = () => ({
  type: CONTACT_FORM_RESET,
});

// To add infos from user message form
export const userSendMessage = (newMessage, id) => ({
  type: USER_SEND_MESSAGE,
  value: newMessage,
  id: id,
});

// To post message to API Back
export const postUsermessage = () => ({
  type: POST_USER_MESSAGE,
});

// To show or hide succes message
export const isMessageSend = () => ({
  type: IS_MESSAGE_SEND,
});
