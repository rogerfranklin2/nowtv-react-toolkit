require('babel-core/register')({
  only: [/src/, /docs/, /server/]
});
const nodeHook = require('node-hook');
['.sass', '.svg'].map(extension => {
  // returning the filename as a string for testing purposes
  nodeHook.hook(extension, (_, filename) => {
    return `"${filename}"`
  });
});
const server = require('./server');
const port = process.env.PORT || 3003;

server.default.listen(port);
server.default.on('listening', () => {
  console.log(`Listening on ${port}`);
});
