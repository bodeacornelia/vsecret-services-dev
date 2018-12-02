'use strict'

const add = require('./add');
const list = require('./list');

module.exports.init = init;

function init(app) {
  const BASE_URL = app.get('apiBase');
  app.use(BASE_URL, add);
  app.use(BASE_URL, list);

  return app;
}


