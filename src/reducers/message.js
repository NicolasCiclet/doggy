import {
  ACTIVE_CONVERSATION,
  CONTACT_FORM_MAIL, CONTACT_FORM_MESSAGE, CONTACT_FORM_NAME, CONTACT_FORM_RESET,
  IS_MESSAGE_SEND, SHOW_ONE_CONVERSATION, STOCK_ALL_CONVERSATIONS,
  STOCK_ONE_CONVERSATION, USER_SEND_MESSAGE,
} from '../actions/message';

const initialState = {
  // Info for form contact us
  contactName: '',
  contactMail: '',
  contactMessage: '',

  // Info for form user message
  userNewMessage: '',
  userId: '',
  isMessageSend: false,
  isJustOneConversation: false,
  allConversationsApi: [],
  oneConversationApi: [],
  activeConversation: '',

};

const messageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_FORM_NAME:
      return {
        ...state,
        contactName: action.value,
      };
    case CONTACT_FORM_MAIL:
      return {
        ...state,
        contactMail: action.value,
      };
    case CONTACT_FORM_MESSAGE:
      return {
        ...state,
        contactMessage: action.value,
      };
    case CONTACT_FORM_RESET:
      return {
        ...state,
        contactName: '',
        contactMail: '',
        contactMessage: '',
      };

    case USER_SEND_MESSAGE:
      return {
        ...state,
        userNewMessage: action.value,
        userId: action.id,
      };

    case IS_MESSAGE_SEND:
      return {
        ...state,
        isMessageSend: action.value,
      };

    case SHOW_ONE_CONVERSATION:
      return {
        ...state,
        // isJustOneConversation: action.value,
        isJustOneConversation: !state.isJustOneConversation,
      };

    case STOCK_ALL_CONVERSATIONS:
      return {
        ...state,
        allConversationsApi: action.value,
      };

    case STOCK_ONE_CONVERSATION:
      return {
        ...state,
        oneConversationApi: action.value,
      };

    case ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.value,
      };

    default:
      return state;
  }
};

export default messageReducer;
