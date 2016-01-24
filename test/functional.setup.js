import server from '../docs/server/server';
import webdriverio from 'webdriverio';
const baseURL = 'http://localhost:3004';

const options = {
  desiredCapabilities: {
    browserName: 'phantomjs'
  },
  baseURL
};

const client = webdriverio.remote(options);

server.listen(3004);

server.on('listening', () => {
  console.log('Listening on 3004');
});

export default {
  client,
  baseURL
};
