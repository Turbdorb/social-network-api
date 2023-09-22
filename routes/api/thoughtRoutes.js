const express = require('express');
const router = express.Router();
const thoughtControllers = require('../../controllers/thoughtControllers');

router.route('/')
  .get(thoughtControllers.getThoughts)
  .post(thoughtControllers.createThought);

router.route('/:thoughtId')
  .get(thoughtControllers.getSingleThought)
  .put(thoughtControllers.updateThought)
  .delete(thoughtControllers.deleteThought);

router.route('/:thoughtId/reactions')
  .post(thoughtControllers.createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtControllers.deleteReaction);

module.exports = router;
