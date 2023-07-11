const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: "String",
    maxLength: 100,
    minLength: 4,
    required: [true, "Book must have a name"],
  },
  photo: {
    type: "String",
    default: "default.png",
  },
  author: {
    type: "String",
    required: [true, "Book must have an author"],
  },
  publisher: {
    type: "String",
    required: [true, "Book must have a publisher"],
  },
  cost: {
    type: "Number",
    min: 0,
    required: [true, "Book must have a cost"],
    default: 0,
  },
  description: {
    type: "String",
  },
  genre: {
    type: [String],
    required: [true, "Book must have genres"],
  },
  ISBN: {
    type: String,
    maxLength: 13,
    minLength: 13,
    required: [true, "Book must have an ISBN number"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Book must have a rating"],
    min: 1,
    max: 5,
  },
  available: {
    type: Boolean,
    default: true,
  },
  issuedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    default: null,
  },
  issuedOn: {
    type: Date,
    default: null,
  },
  returnDate: {
    type: Date,
    default: null,
  },
  added: {
    type: Date,
    default: new Date(),
  },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

schema.virtual("expectedReturnDate").get(function () {
  const two_weeks_ms = 1000 * 60 * 60 * 24 * 14;
  return this.issuedOn ? this.issuedOn.getTime() + two_weeks_ms : null;
});

const Book = mongoose.model("Book", schema);
module.exports = Book;
