const Base = require('./base.js');

module.exports = class extends Base {
  async listAction() {
    let members = await think.model('member').getList(this.get('index'), this.get('size'))
    return this.success(members);
  }

  applyAction() {
    return this.success({ code: 200, message: 'member apply' });
  }

  voteAction() {
    return this.success({ code: 200, message: 'member vote' });
  }
};
