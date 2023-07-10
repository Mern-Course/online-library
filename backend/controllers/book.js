const catchAsync = require("../utils/catchAsync");
const Book = require("../models/book");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { getOne, addOne, getAll, updateOne, deleteOne } = require("./factory");

const getBooks = getAll(Book);
const createBook = addOne(Book);
const getBook = getOne(Book);
const updateBook = updateOne(Book);
const deleteBook = deleteOne(Book);

const getPopular = catchAsync(async (req, res, next) => {
  const books = await Book.find({});

  const popular = [];
  for (let i of books) {
    if (i.rating > 4) popular.push(i);
  }

  res.status(200).json({
    status: "success",
    data: popular,
  });
});

const getTrending = catchAsync(async (req, res, next) => {
  const books = await Book.find({});

  const popular = [];
  for (let i of books) {
    if (i.rating > 4 && new Date() - i.added < 1000 * 60 * 60 * 24 * 365) {
      popular.push(i);
    }
  }

  res.status(200).json({
    status: "success",
    data: popular,
  });
});

const issueBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(new AppError("No such book exists"));
  }

  if (book.available === false) {
    return next(new AppError("Book isn't available at the moment"));
  }

  let updatedBook = {
    available: false,
    issuedBy: req.user.id,
    issuedOn: new Date(),
  };

  await Book.findByIdAndUpdate(book.id, updatedBook);

  const updatedUser = {
    booksIssued: [...(req.user.booksIssued), book._id],
  };

  await User.findByIdAndUpdate(req.user._id, updatedUser);
  req.user = {
    ...(req.user),
    ...updatedUser,
  };

  res.status(200).json({
    status: "success",
    data: updatedBook,
  });
});

const returnBook = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(new AppError("No such book exists"));
  }

  if (book.available === true) {
    return next(new AppError("Book is already returned"));
  }

  if (book.issuedBy.toString() !== req.user.id) {
    return next(new AppError("You are not authorized to return this book"));
  }

  const returnDate = new Date();
  const diffInDays = Math.floor(
    (returnDate - book.issuedOn) / (1000 * 60 * 60 * 24),
  );
  const fine = diffInDays > 14 ? (diffInDays - 14) * 10 : 0;

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
    available: true,
    issuedBy: null,
    issuedOn: null,
    returnDate,
  }, { new: true, runValidators: true });

  let books = req.user.booksIssued;
  const idx = books.indexOf(book._id);
  books.splice(idx, 1);

  const updatedUser = {
    booksIssued: books,
    fine,
  };

  await User.findByIdAndUpdate(req.user._id, updatedUser);
  req.user = {
    ...(req.user),
    ...updatedUser,
  };

  res.status(200).json({
    status: "success",
    data: {
      book: updatedBook,
      fine,
    },
  });
});

module.exports = {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  issueBook,
  returnBook,
  getTrending,
  getPopular,
};
