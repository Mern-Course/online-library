const express = require('express');
const {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/book');

const router = express.Router();

router
  .route('/')
  .get(getBooks)
  .post(createBook);

router
  .route('/:id')
  .get(getBook)
  .patch(updateBook)
  .delete(deleteBook);

module.exports = router;

