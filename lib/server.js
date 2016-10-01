// Modules
var http = require('http'),
    config = require('./config'),
    app = require('./application');

// Create the application server and start it
var server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server listening on HTTP port ' + config.port);
});
