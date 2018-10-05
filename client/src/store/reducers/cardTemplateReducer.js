import { SET_BORDER_COLOR, SET_HERO_IMAGE, } from "../actions/types";

const initialState = {
  cardBorderColor: "",
  fileUrl: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BORDER_COLOR:
      return {
        ...state,
        cardBorderColor: action.color,
      };
    case SET_HERO_IMAGE:
      return {
        ...state,
        fileUrl: action.uploadedFileUrl,
      };
    default:
      return state;
  }
}
