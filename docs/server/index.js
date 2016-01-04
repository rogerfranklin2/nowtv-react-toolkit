import server from './server';

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003');
});
