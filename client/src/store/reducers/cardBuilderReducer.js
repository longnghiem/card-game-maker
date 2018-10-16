import { SET_HERO_IMAGE, } from "../actions/types";

const initialState = {
  fileUrl: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HERO_IMAGE:
      return {
        ...state,
        fileUrl: action.uploadedFileUrl,
      };
    default:
      return state;
  }
}
