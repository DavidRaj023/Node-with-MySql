const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Create a new user
router.post('/', userController.create);

// Retrieve a single user with id
router.post('/id', userController.findById);

// Retrieve all users
router.get('/', userController.findAll);

// Update a user with id
router.post('/update/id', userController.update);

// Delete a user with id
router.post('/remove/id', userController.delete);



module.exports = router