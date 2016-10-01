// Modules
var path = require('path');

// Determine port to listen
var port = (process.env.VCAP_APP_PORT || 3000);

// Export
module.exports = {
  port: port,
  rootPath: path.normalize(__dirname + '/../')
};
