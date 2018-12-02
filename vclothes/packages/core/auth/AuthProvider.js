'use strict'

const Auth = require('./Auth');
const BearerStrategyProvider = require('./strategies/BearerStrategyProvider');

let instance;

module.exports = AuthProvider;

function AuthProvider() {
  if (!instance) {
    instance = new Auth();
    instance.registerStrategy('bearer', BearerStrategyProvider());
  }

  return instance;
}