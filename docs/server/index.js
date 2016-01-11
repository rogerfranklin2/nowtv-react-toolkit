require('babel-core/register')({
  only: [/src/, /docs/, /server/]
});
var server = require('./server');
var port = process.env.PORT || 3003;

server.default.listen(port);
server.default.on('listening', () => {
  console.log(`Listening on ${port}`);
});
