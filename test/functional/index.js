import wdio from '../functional.setup'
import chai from 'chai';

const client = wdio.client;
const expect = chai.expect;

describe('documentation index page', function() {

  it('should run', function (done) {
    client.init()
      .url(wdio.baseURL + '/')
      .title().then(function (title) {
        expect(title.value).to.equal('NowTV React Toolkit - Documentation')
      })
      .end(done)
  });

});
