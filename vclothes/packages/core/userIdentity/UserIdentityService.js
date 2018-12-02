'use strict'

const auth = require('../../../libs/auth');
const DBGateway = require('../../../DBGateway');

class UserIdentityService {

  authenticateByAccessToken(token, callback) {
    const gateway = new DBGateway('users');

    auth.verifyJWTToken(token).then(function (response) {
      gateway.getById(response.data.id, function (err, user) {
        if (err) {
          callback(err, null);
        }
        if (!user) {
          callback(err, null);
        }

        callback(null, user);
      });

    });
  }
}

module.exports = UserIdentityService;