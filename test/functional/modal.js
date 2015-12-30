import wdio from '../functional.setup'
import chai from 'chai';

const client = wdio.client;
const expect = chai.expect;

describe('modal component', function() {

  it('should be visible', function () {
    return client.init()
      .url(wdio.baseURL + '/')
      .click('#modalCta')
      .isVisible('.now-modal.visible').then(function(isVisible){
        expect(isVisible).to.equal(true);
      });
  });

});
