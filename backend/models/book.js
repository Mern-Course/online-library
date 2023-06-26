const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: {
		type: 'String',
		maxLength: 20,
		minLength: 4,
		required: [true, 'Book must have a name'],
	},
	photo: {
		type: 'String',
		default: 'default.png',
	},
	author:{
		type: 'String',
		required: [true, 'Book must have an author'],
	},
	genre: {
		type: [String],
		required: [true, 'Book must have genres'],
	},
	ISBN: {
		type: String,
		maxLength: 13,
		minLength: 13,
		required: [true, 'Book must have an ISBN number'],
	},
	rating: {
		type: Number,
		required: [true, 'Book must have a rating'],
		min: 1,
		max: 5,
	},
	available: {
		type: Boolean,
		default: true,
	},
	issuedOn: Date,
	returnDate: Date,
},
{
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
}
);

schema.virtual('expectedReturnDate').get(function() {
	const two_weeks_ms = 1000*60*60*24*14;
	return this.issuedOn + two_weeks_ms;
});
