const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

router.route('/:userId')
  .get(userController.getSingleUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/:userId/friends/:friendId')
  .post(userController.addFriend)
  .delete(userController.deleteFriend);

module.exports = router;
