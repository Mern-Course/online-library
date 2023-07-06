const express = require('express');
const {
  getUsers,
  updateMe,
  deleteMe,
  getMe,
  getUser,
  uploadUserPhoto,
  resizePhoto,
} = require('../controllers/user');
const {
  register,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
  logout,
  isLoggedIn,
} = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/isLoggedIn').get(isLoggedIn)

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

router.use(protect);

router.route('/updatePassword').patch(updatePassword);
router.route('/me').get(getMe, getUser);
router.route('/updateMe').patch(uploadUserPhoto, resizePhoto, updateMe);
router.route('/deleteMe').delete(deleteMe);

router.use(restrictTo('employee', 'admin'));

router.route('/').get(getUsers);
router.route('/:id').get(getUser);

module.exports = router;
