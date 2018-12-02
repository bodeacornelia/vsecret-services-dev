'use strict'

const TABLE_NAME = require('../constants');
const DBGateway = require("../../../DBGateway");
const gateway = new DBGateway(TABLE_NAME);
const Controller = require('../../../system/Controller');

class PhotoListController extends Controller {

  constructor() {
    super();
  }

  listAllPhotos() {
    return function (req, res) {
      gateway.getAll(function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  }
}

module.exports = PhotoListController;