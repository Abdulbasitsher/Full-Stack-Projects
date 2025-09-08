// src/actions/alert.js
import { setAlert, removeAlert } from "../reducers/alert";

export const showAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const action = setAlert(msg, alertType, timeout);
    dispatch(action);

    setTimeout(() => dispatch(removeAlert(action.payload.id)), timeout);
  };
