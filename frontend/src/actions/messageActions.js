import Axios from "axios";
import {
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_CREATE_REQUEST,
  MESSAGE_CREATE_SUCCESS,
  MESSAGE_CREATE_FAIL,
  MESSAGE_CREATE_RESET,
  MESSAGE_UPDATE_REQUEST,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL,
  MESSAGE_UPDATE_RESET,
  MESSAGE_DELETE_REQUEST,
  MESSAGE_DELETE_SUCCESS,
  MESSAGE_DELETE_FAIL,
} from "../constants/messageConstants";

export const listMessages = () => async (dispatch) => {
  dispatch({
    type: MESSAGE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/messages");
    dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_LIST_FAIL, payload: error.message });
  }
};
export const createMessage =
  (firstName, lastName, phone, email, message) => async (dispatch) => {
    dispatch({
      type: MESSAGE_CREATE_REQUEST,
      payload: { firstName, lastName, phone, email, message },
    });
    try {
      const { data } = await Axios.post("/api/messages/create", {
        firstName,
        lastName,
        phone,
        email,
        message,
      });
      dispatch({ type: MESSAGE_CREATE_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: MESSAGE_CREATE_FAIL,
        payload: error.message,
        //     error.response && error.response.data.message
        //       ? error.response.data.message
        //       : error.message,
      });
    }
  };
export const updateMessage = (messageUpdate) => async (dispatch) => {
  dispatch({ type: MESSAGE_UPDATE_REQUEST, payload: messageUpdate });
  try {
    const { data } = await Axios.put(
      `/api/messages/${messageUpdate._id}`,
      messageUpdate
    );
    dispatch({ type: MESSAGE_UPDATE_SUCCESS, payload: data });
    localStorage.setItem("updatedMessage", JSON.stringify(data));
  } catch (error) {
    const message = error.message;
    dispatch({ type: MESSAGE_UPDATE_FAIL, payload: message });
  }
};

export const deleteMessage = (messageId) => async (dispatch, getState) => {
  dispatch({ type: MESSAGE_DELETE_REQUEST, payload: messageId });
  try {
    const { data } = Axios.delete(`/api/messages/${messageId}`);
    dispatch({ type: MESSAGE_DELETE_SUCCESS });
  } catch (error) {
    const message = error.message;
    dispatch({ type: MESSAGE_DELETE_FAIL, payload: message });
  }
};

// export const createProduct = () => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_CREATE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await axios.post(
//       "/api/products",
//       {},
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data.product,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
//   }
// };
