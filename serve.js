var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic('.')).listen(8888);
server.on('listening', () => {
  console.log('Listening on http://localhost:8888');
});
