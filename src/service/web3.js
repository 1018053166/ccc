const Web3 = require('Web3');
const Crontab = require('think-crontab');

module.exports = class extends think.Service {
  constructor() {
    super();
    
    if (think.web3 === undefined) {
      think.logger.debug('new web3')
      const web3 = new Web3("http://127.0.0.1:7545");
      think.web3 = web3;

      think.logger.debug('start crontab')
      const crontab = [{
        interval: '3s',
        immediate: true,
        handle: async () => {
          try {
            let accounts = await web3.eth.getCoinbase();
            think.logger.debug(accounts)
            think.io.emit('addMember', accounts);
          } catch (error) {
            think.logger.debug('error:', error)
          }
        }
      }];
      const instance = new Crontab(crontab, think.app);
      instance.runTask();

      think.logger.debug('start subscribe')
      web3.eth.subscribe('newBlockHeaders', async (error, result) => {
        let blocks = await think.model('block').select()
        think.logger.debug(blocks)

        if (error) {
          think.logger.debug('error:', error);
        } else {
          think.logger.debug('result:', result);
        }
      }).on("data", async blockHeader => {
        let blocks = await think.model('block').select()
        think.logger.debug(blocks)

        think.logger.debug('blockHeader:', blockHeader)
      });
    }

    this.web3 = think.web3;
  }

};
