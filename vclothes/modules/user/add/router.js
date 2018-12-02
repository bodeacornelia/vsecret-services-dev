'use strict'

var express = require('express');
var router = express.Router();
var UserAddController = require('./UserAddController');
const controller = new UserAddController();

router.post('/users.add',
  controller.authenticate(),
  controller.createUser()
);

module.exports = router;