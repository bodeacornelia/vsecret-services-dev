const passport = require('passport');

class Controller {

  authenticate() {
    return function (req, res, next) {
      return passport.authenticate('bearer', { session: false })(req, res, next);
    }
  }
}

module.exports = Controller;