'use strict'

const express = require('express');
const router = express.Router();
const AddPhotoController = require('./AddPhotoController')
const controller = new AddPhotoController();

router.post('/photos.add',
  controller.authenticate(),
  controller.addPhoto()
);

module.exports = router;