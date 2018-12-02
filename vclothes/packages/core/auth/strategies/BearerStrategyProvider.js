'use strict'

const BearerStrategy = require('passport-http-bearer').Strategy;
const UserIdentityServiceProvider = require('../../userIdentity/UserIdentityServiceProvider');

module.exports = BearerStrategyProvider;

function BearerStrategyProvider() {
  const userIdentityService = UserIdentityServiceProvider();

  return new BearerStrategy(function(token, done) {
    userIdentityService.authenticateByAccessToken(token, (err, result) => {
      if (err) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      if (!result) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      done(null, result);
    });
  });
}
