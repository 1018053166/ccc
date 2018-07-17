const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success({ code: 200, message: 'success' });
  }
};
