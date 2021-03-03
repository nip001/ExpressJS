var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

/* GET users listing. */
router.route('/')
      .get(userController.getAllUser)
      .post(userController.addUser)
      
router.route('/:nama')
      .get(userController.getUserByNama)
      .patch(userController.updateDataUser)
      .delete(userController.deleteDataUser)

module.exports = router;
