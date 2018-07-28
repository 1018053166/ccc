const Base = require('./base.js');

module.exports = class extends Base {
  listAction() {
    return this.success({ code: 200, message: 'message list' });
  }
};
