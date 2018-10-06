import { SET_BORDER_COLOR, SET_HERO_IMAGE, } from "./types";

export const setBorderColor = color => ({ type: SET_BORDER_COLOR, color, });
export const setHeroImage = uploadedFileUrl => ({ type: SET_HERO_IMAGE, uploadedFileUrl, });
