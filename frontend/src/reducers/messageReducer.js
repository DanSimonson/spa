import {
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAIL,
  MESSAGE_CREATE_RESET,
  MESSAGE_UPDATE_REQUEST,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL,
  MESSAGE_UPDATE_RESET,
} from "../constants/messageConstants";
let initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export const messageListReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case MESSAGE_LIST_REQUEST:
      return { loading: true };
    case MESSAGE_LIST_SUCCESS:
      return { loading: false, messages: action.payload };
    case MESSAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//messages: []
export const messageCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_CREATE_REQUEST:
      return { loading: true };
    case MESSAGE_CREATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case MESSAGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const messageUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_UPDATE_REQUEST:
      return { loading: true };
    case MESSAGE_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case MESSAGE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MESSAGE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
