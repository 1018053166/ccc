const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    // return this.success('xiao888888888');
    let model = this.model('user')
    let users = model.select();
    return this.json(users)
  }
};
