'use strict'

const AuthProvider = require('../packages/core/auth/AuthProvider');
const auth = require('./auth');
const user = require('./user');
const photo = require('./photo');
const appointment = require('./appointment');

module.exports.init = init;

const envConfig = (env) => ({
  apiUrl: env.API_BASE
});

function initAuthSystem() {
  return AuthProvider();
}

function init(app) {
  const config = envConfig(process.env);
  const { apiUrl } = config;
  const authSystem = initAuthSystem();
  
  app.set('apiBase', apiUrl);
  app.set('auth', authSystem);

  auth.init(app);
  user.init(app);
  photo.init(app);
  appointment.init(app);

  return app;
}