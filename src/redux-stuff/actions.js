import { isPast } from "date-fns";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SET_ALL_ENTRIES = "SET_ALL_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";

export const checkLogin = () => (dispatch) => {
  const token = localStorage.getItem("dvitter");
  let user = null;

  if (token) {
    const decodedUser = jwtDecode(token);
    const gecersizMi = isPast(new Date(token.exp * 1000));

    if (!gecersizMi) {
      user = decodedUser;

      dispatch({ type: SET_TOKEN, payload: token });
    } else {
      localStorage.removeItem("dvitter");
      dispatch({ type: SET_TOKEN, payload: null });
    }
    dispatch({ type: SET_USER, payload: user });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("dvitter");
  dispatch({ type: SET_USER, payload: null });
  dispatch({ type: SET_TOKEN, payload: null });
};

export const getAllEntries = () => (dispatch) => {
  axios
    .get("https://wit-courses-api2.onrender.com/entries")
    .then((res) => dispatch({ type: SET_ALL_ENTRIES, payload: res.data }))
    .catch((err) => console.log(err));
};
export const addEntry = (gidecekVeri, token) => (dispatch) => {
  axios
    .post("https://wit-courses-api2.onrender.com/entries", gidecekVeri, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: ADD_ENTRY,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
