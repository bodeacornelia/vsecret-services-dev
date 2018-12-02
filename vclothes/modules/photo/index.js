'use strict'

const list = require('./list');
const add = require('./add');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, list);
  app.use(BASE_URL, add);

  return app;
}