'use strict'
const bcrypt = require('bcrypt');
const auth = require('../../../libs/auth');

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);

exports.login = function (req, res) {
  gateway.getByEmailAddress(req.body.email, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      const user = result[0];
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          return res.status(401).json({
            failed: 'Unauthorized Access'
          });
        }
        if (result) {
          return res.status(200).json({
            success: 'true',
            token: auth.createJWToken({
              sessionData: user,
              maxAge: 3600
            })
          });
        }
        return res.status(401).json({
          failed: 'Unauthorized Access'
        });
      });
    }
  })
}