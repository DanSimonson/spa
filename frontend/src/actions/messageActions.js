import Axios from "axios";
import {
  MESSAGE_LIST_FAIL,
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
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
