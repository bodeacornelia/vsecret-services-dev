'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);
const Controller = require('../../../system/Controller');

// exports.listUserDetails = function (req, res) {
//   gateway.getById(req.params.userId, function (err, result) {
//     if (err)
//       res.send(err);
//     res.send(result);
//   })
// }

class UserDetailsController extends Controller {
  constructor() {
    super();
  }

  listUserDetails() {
    return function (req, res) {
      gateway.getById(req.params.userId, function (err, result) {
        if (err)
          res.send(err);
        res.send(result);
      });
    };
  }
}

module.exports = UserDetailsController;