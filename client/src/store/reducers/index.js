import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import cardTemplateReducer from "./cardTemplateReducer";

export default combineReducers({ form: formReducer, cardTemplate: cardTemplateReducer, });
