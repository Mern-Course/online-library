const express = require("express");
const {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
  issueBook,
  returnBook,
  getPopular,
  getTrending,
} = require("../controllers/book");

const { protect, restrictTo } = require("../controllers/auth");

const router = express.Router();

router.route("/").get(getBooks);
router.route("/popular").get(getPopular);
router.route("/trending").get(getTrending);
router.route("/:id").get(getBook);

router.use(protect);

router.route("/issue/:id").get(issueBook);
router.route("/return/:id").get(returnBook);

router.use(restrictTo("admin"));

router.route("/").post(createBook);
router.route("/:id").delete(deleteBook).patch(updateBook);

module.exports = router;
