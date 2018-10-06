import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import cardBuilderReducer from "./cardBuilderReducer";

export default combineReducers({ form: formReducer, cardBuilder: cardBuilderReducer, });
