const Base = require('./base.js');

module.exports = class extends Base {
  listAction() {
    return this.success({ code: 200, message: 'member list' });
  }

  applyAction() {
    return this.success({ code: 200, message: 'member apply' });
  }

  voteAction() {
    return this.success({ code: 200, message: 'member vote' });
  }
};
