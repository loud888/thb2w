const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/users', UserController.createUser);
router.post('/answers', UserController.submitAnswer);

module.exports = router;
