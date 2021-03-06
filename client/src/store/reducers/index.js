import { combineReducers, } from "redux";
import { reducer as formReducer, } from "redux-form";
import cardBuilderReducer from "./cardBuilderReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  form: formReducer,
  cardBuilder: cardBuilderReducer,
  cards: cardsReducer,
});

// form selectors
export const getHeroName = state => state.form.cardInfo.values.heroName;
export const getAbility = state => state.form.cardInfo.values.ability;
export const getCardNumber = state => state.form.cardInfo.values.cardNumber;
export const getColor = state => state.form.cardInfo.values.color;

// cardBuilder selectors
export const getFileUrl = state => state.cardBuilder.fileUrl;

// cards selectors
export const getCards = state => state.cards.cardsArray;
