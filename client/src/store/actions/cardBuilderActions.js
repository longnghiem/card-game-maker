import { SET_HERO_IMAGE, } from "./types";

const setHeroImage = uploadedFileUrl => ({
  type: SET_HERO_IMAGE,
  uploadedFileUrl,
});

export default setHeroImage;
