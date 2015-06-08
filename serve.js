var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/docs/')).listen(8080);
