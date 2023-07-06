const catchAsync = require('../utils/catchAsync');
const Book = require('../models/book');
const AppError = require('../utils/AppError');
const { getOne, addOne, getAll, updateOne, deleteOne } = require('./factory');

const getBooks = getAll(Book);
const createBook = addOne(Book);
const getBook = getOne(Book);
const updateBook = updateOne(Book);
const deleteBook = deleteOne(Book);

const issueBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if(!book)
    return next(new AppError("No such book exists"));

  if(book.available === false)
    return next(new AppError("Book isn't available at the moment"));

  let updatedBook = {...book};
  updatedBook = {
    available: false,
    issuedBy: req.user.id,
    issuedOn: new Date(),
  }
  updatedBook.save();

  res.status(200).json({
    status: 'success',
    data: updatedBook,
  });
})


const returnBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book)
    return next(new AppError("No such book exists"));

  if (book.available === true)
    return next(new AppError("Book is already returned"));

  if (book.issuedBy.toString() !== req.user.id)
    return next(new AppError("You are not authorized to return this book"));

  const returnDate = new Date();
  const diffInDays = Math.floor((returnDate - book.issuedOn) / (1000 * 60 * 60 * 24));
  const fine = diffInDays > 14 ? (diffInDays - 14) * 10 : 0;

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
    available: true,
    issuedBy: null,
    issuedOn: null,
  }, { new: true, runValidators: true });

  res.status(200).json({
    status: 'success',
    data: {
      book: updatedBook,
      fine: fine,
    },
  });
})

module.exports = {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  issueBook,
  returnBook
};
