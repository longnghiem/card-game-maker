const express = require("express");
const router = express.Router();
const cardsFunctions = require("./cards_functions/cards_functions");

router
	.route("/")
	.get(cardsFunctions.getAllCards)
	.post(cardsFunctions.addNewCard);

module.exports = router;
