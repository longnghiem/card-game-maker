import { FETCH_CARDS, } from "../actions/types";

const initialState = {
  cardsArray: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        cardsArray: action.payload,
      };
    default:
      return state;
  }
}
