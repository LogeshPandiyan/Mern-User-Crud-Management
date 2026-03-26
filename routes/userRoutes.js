const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

// Put user router to crud
router.post('/create-user', userController.createUsers);
router.get('/get-users', userController.getAllUsers);
router.get('/get-users/:id', userController.getSingleUserDetail)
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
