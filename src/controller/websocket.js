const Base = require('./base.js');

module.exports = class extends Base {
  async openAction() {
    think.io = this.ctx.req.io;
    // think.logger.debug(this.websocket.id)
    // think.io.emit('addMember', 'This client opened successfully!');
    // await this.cache('name', 'value');
  }

  async closeAction() {
    think.io = null
    // await this.cache('name', null);
  }
};
