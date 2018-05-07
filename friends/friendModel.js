// define a schema with mongoose
const mongoose = require("mongoose");

// {
//   firstName: "Jane", // String, required
//   lastName: "Doe",  // String, required
//   age: 18, // Number, required, should be an integer between 1 and 120
//   createdOn: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, required, defaults to current date
// }

const definition = {
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		min: [1, "Can a friend by 0 years old?"],
		max: [120, "Whoa is your friend immortal?"]
	}
};

const options = {
	timestamps: true
};

const friendSchema = new mongoose.Schema(definition, options);

const friendModel = mongoose.model("Friend", friendSchema, "friends");

module.exports = friendModel;