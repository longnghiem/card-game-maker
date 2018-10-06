import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import cardBuilderReducer from "./cardBuilderReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  form: formReducer,
  cardBuilder: cardBuilderReducer,
  cards: cardsReducer,
});

export const getCards = state => state.cards.cardsArray;
