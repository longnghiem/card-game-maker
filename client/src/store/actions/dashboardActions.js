import axios from "axios";
import { FETCH_CARDS, } from "./types";

const fetchCards = () => (dispatch) => {
  axios.get("/api/cards").then((res) => {
    dispatch({
      type: FETCH_CARDS,
      payload: res.data,
    });
  });
};

export default fetchCards;
