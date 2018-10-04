import { SET_BORDER_COLOR, } from "../actions/types";

const initialState = {
  cardBorderColor: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BORDER_COLOR:
      return {
        cardBorderColor: action.color,
      };
    default:
      return state;
  }
}
