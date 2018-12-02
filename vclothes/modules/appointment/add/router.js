'use strict'

const express = require('express');
const router = express.Router();
const AddAppointmentController = require('./AddAppointmentController');
const controller = new AddAppointmentController();

router.post('/appointments.add',
  controller.authenticate(),
  controller.addAppointment()
);

module.exports = router;