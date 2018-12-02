'use strict'

const auth = require('./login');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, auth);

  return app;
}