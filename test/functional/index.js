import wdio from '../functional.setup';
import chai from 'chai';

const client = wdio.client;
const expect = chai.expect;

describe('documentation index page', () => {
  it('should run', (done) => {
    client.init()
      .url(`${wdio.baseURL}/`)
      .title().then((title) => {
        expect(title.value).to.equal('NowTV React Toolkit - Documentation');
      })
      .end(done);
  });
});
