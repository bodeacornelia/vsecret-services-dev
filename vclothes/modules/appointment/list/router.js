'use strict'

const express = require('express');
const router = express.Router();
const ListAppointmentsController = require('./ListAppointmentsController');
const controller = new ListAppointmentsController();

router.get('/appointments',
  controller.authenticate(),
  controller.listAllAppointments()
);

module.exports = router;