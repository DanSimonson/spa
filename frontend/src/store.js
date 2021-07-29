import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  messageListReducer,
  messageCreateReducer,
  messageUpdateReducer,
  messageDeleteReducer,
} from "./reducers/messageReducer";
import {
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  messageList: messageListReducer,
  messageCreate: messageCreateReducer,
  messageUpdate: messageUpdateReducer,
  messageDelete: messageDeleteReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
