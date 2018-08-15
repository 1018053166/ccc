const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const websocket = require('think-websocket');

module.exports = [
  model(think.app),
  websocket(think.app),
  cache,
  session
];
