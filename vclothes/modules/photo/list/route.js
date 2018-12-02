'use strict'

const express = require('express');
const router = express.Router();
const PhotoListController = require('./PhotoListController');
const controller = new PhotoListController();

router.get('/photos',
  controller.authenticate(),
  controller.listAllPhotos()
);

module.exports = router;