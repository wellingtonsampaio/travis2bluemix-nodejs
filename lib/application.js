// Modules
var express = require('express'),
    config = require('./config');

// Create and configure the express application
var app = express();
app.use(express.static(config.rootPath + '/public'));

// Export
module.exports = app;
