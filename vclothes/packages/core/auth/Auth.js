'use stric'

const passport = require('passport');

class Auth {
  constructor() {
    this.passport = passport;
  }

  registerStrategy(namespace, strategy) {
    this.passport.use(namespace, strategy);
  }
}

module.exports = Auth;