'use strict';

const UserIdentityService = require('./UserIdentityService');

let instance;

module.exports = UserIdentityServiceProvider;

function UserIdentityServiceProvider() {
  if (!instance) {
    instance = new UserIdentityService();
  }

  return instance;
}
