const mongo = require('think-mongo');
const cache = require('think-cache');
const session = require('think-session');

module.exports = [
  mongo(think.app),
  cache,
  session
];
