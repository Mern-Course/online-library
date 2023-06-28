const express = require('express');
const {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require('../controllers/book');

const {protect, restrictTo} = require('../controllers/auth')

const router = express.Router();

router
  .route('/')
  .get(getBooks)



router
  .route('/:id')
  .get(getBook)

router.use(protect())
router.use(restrictTo("admin"))
router.route("/").post(createBook);
router.route("/:id").delete(deleteBook).patch(updateBook)

module.exports = router;

