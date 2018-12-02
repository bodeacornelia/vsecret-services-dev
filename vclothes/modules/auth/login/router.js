'use strict'

var express = require('express');
var router = express.Router();
var controller = require('./AuthController');

router.post(
  '/login',
  controller.login)

module.exports = router;