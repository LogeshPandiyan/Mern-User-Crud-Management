const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

// Put user router to crud
router.post('/createUser', userController.createUsers);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getAllUsers/:id', userController.getSingleUserDetail)
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;
