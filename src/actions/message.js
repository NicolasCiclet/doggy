// To add infos from contact form
export const CONTACT_FORM_MAIL = 'CONTACT_FORM_MAIL';
export const CONTACT_FORM_NAME = 'CONTACT_FORM_NAME';
export const CONTACT_FORM_MESSAGE = 'CONTACT_FORM_MESSAGE';
export const CONTACT_FORM_RESET = 'CONTACT_FORM_RESET';

// To send a mail from contacts page
export const CONTACT_SEND_MAIL = 'CONTACT_SEND_MAIL';

// To add infos from user message form
export const USER_SEND_MESSAGE = 'USER_SEND_MESSAGE';

// To post message to API Back
export const POST_USER_MESSAGE = 'POST_USER_MESSAGE';

// To show or hide succes message
export const IS_MESSAGE_SEND = 'IS_MESSAGE_SEND';

// To show or hide only One Conversation
export const SHOW_ONE_CONVERSATION = 'SHOW_ONE_CONVERSATION';

// To get all Conversations from back
export const GET_ALL_CONVERSATIONS = 'GET_ALL_CONVERSATIONS';

// To stock all Conversations on state
export const STOCK_ALL_CONVERSATIONS = 'STOCK_ALL_CONVERSATIONS';

// To get one Conversation from back
export const GET_ONE_CONVERSATION = 'GET_ONE_CONVERSATION';

// To stock one Conversation on state
export const STOCK_ONE_CONVERSATION = 'STOCK_ONE_CONVERSATION';

// To show active Conversation
export const ACTIVE_CONVERSATION = 'ACTIVE_CONVERSATION';

// To use patch request to tell the back that all messages are read
export const PATCH_READ_MESSAGES = 'PATCH_READ_MESSAGES';

// To stock unreadMessage
export const STOCK_UNREAD_MESSAGES = 'STOCK_UNREAD_MESSAGES';

// deletes messages
export const LOGOUT_MESSAGE = 'LOGOUT_MESSAGE';

// deletes current message
export const LOGOUT_CURRENT_MESSAGE = 'LOGOUT_CURRENT_MESSAGE';

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

export const contactSendMail = () => ({
  type: CONTACT_SEND_MAIL,
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
export const isMessageSend = (bool) => ({
  type: IS_MESSAGE_SEND,
  value: bool,
});

// To show or hide only One Conversation
export const showOneConversation = () => ({
  type: SHOW_ONE_CONVERSATION,
  // value: bool,
});

// To get all Conversations from back
export const getAllConversations = () => ({
  type: GET_ALL_CONVERSATIONS,
});

// To stock all Conversations on state
export const stockAllConversations = (newValue) => ({
  type: STOCK_ALL_CONVERSATIONS,
  value: newValue,
});

// To get one Conversation from back
export const getOneConversation = () => ({
  type: GET_ONE_CONVERSATION,
});

// To stock one Conversation on state
export const stockOneConversation = (newValue) => ({
  type: STOCK_ONE_CONVERSATION,
  value: newValue,
});

// To show active Conversation
export const activeConversation = (newValue) => ({
  type: ACTIVE_CONVERSATION,
  value: newValue,
});

// To use patch request to tell the back that all messages are read
export const patchreadMessages = () => ({
  type: PATCH_READ_MESSAGES,
});

// To stock unreadMessage
export const stockUnreadMessages = (newValue) => ({
  type: STOCK_UNREAD_MESSAGES,
  value: newValue,
});

// deletes all messages
export const logoutMessage = () => ({
  type: LOGOUT_MESSAGE,
});

// deletes current message
export const logoutCurrentMessage = () => ({
  type: LOGOUT_CURRENT_MESSAGE,
});
