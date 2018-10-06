const Card = require("../../models/card");

// Get all cards
exports.getAllCards = (req, res, next) => {
	Card.find({})
		.then((result) => res.json(result))
		.catch((e) => {
			console.log(e);
		});
};

// Create new card
exports.addNewCard = (req, res, next) => {
	const newCard = new Card({ ...req.body, });
	newCard
		.save()
		.then(() => {
			res.json(newCard);
			console.log("new card added");
		})
		.catch((e) => console.log(e));
};
