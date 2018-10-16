const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
	heroName: {
		type: String,
		required: true,
	},
	cardNumber: {
		type: String,
		required: true,
	},
	ability: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	fileUrl: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});
const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
