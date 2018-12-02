'use strict'

const express = require('express');
const router = express.Router();
const UserListController = require('./UserListController');
const controller = new UserListController();

router.get('/users',
  controller.authenticate(),
  controller.listAllUsers(),
);

module.exports = router;