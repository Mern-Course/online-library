const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const Book = require('../models/book');
const AppError = require('../utils/AppError');

const getBooks = catchAsync(async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

const createBook = catchAsync(async (req, res) => {
  const book = new Book(req.body);
  const newBook = await book.save();
  res.status(201).json(newBook);
});

const getBook = catchAsync(async (req, res) => {
  res.json(res.book);
});

const updateBook = catchAsync(async (req, res) => {
  const updates = req.body;
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });
  res.json(updatedBook);
});

const deleteBook = catchAsync(async (req, res) => {
  await res.book.remove();
  res.json({ message: 'Book deleted' });
});

module.exports = {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
