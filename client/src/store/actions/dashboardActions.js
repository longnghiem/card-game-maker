import axios from "axios";
import { FETCH_CARDS, } from "./types";

export const fetchCards = () => (dispatch) => {
  axios.get("/api/cards").then((res) => {
    dispatch({
      type: FETCH_CARDS,
      payload: res.data,
    });
  });
};

export const addCard = values => (dispatch) => {
  console.log(values);
  axios
    .post("/api/cards", values)
    .then((res) => {
      dispatch(fetchCards());
    })
    .catch(e => console.log(e));
};
