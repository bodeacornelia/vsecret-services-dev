'use strict'

var express = require('express');
var router = express.Router();
const UserDetailsController = require('./UserDetailsController');
const controller = new UserDetailsController();

router.get('/user/:userId',
  controller.authenticate(),
  controller.listUserDetails()
);

module.exports = router;