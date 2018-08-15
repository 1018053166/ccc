const Base = require('./base.js');

module.exports = class extends Base {
  infoAction() {
    return this.success({ code: 200, message: 'consortium info' });
  }

  async createAction() {
    

    return this.success({ code: 200, message: 'consortium create' });
  }

  async joinAction() {
    think.service('web3')

    return this.success({ code: 200, message: 'consortium join' });
  }
};
