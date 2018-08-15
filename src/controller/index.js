const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.redirect('/index.html');
  }

  usernameAction() {
    return this.success('xiao8')
  }
};
