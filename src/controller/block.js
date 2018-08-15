const Base = require('./base.js');

module.exports = class extends Base {
  async listAction() {
    return this.success({ code: 200, message: 'block list' });
  }

  statisticAction() {
    return this.success({ code: 200, message: 'block statistic' });
  }
};
