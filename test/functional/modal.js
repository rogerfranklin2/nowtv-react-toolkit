import wdio from '../functional.setup'
import chai from 'chai';

const client = wdio.client;
const expect = chai.expect;

describe('modal component', function() {  

  beforeEach(function(){
    return client.init()
      .url(wdio.baseURL + '/')
      .click('#modalCta');
  });

  afterEach(function() {
    return client.end();
  });   

  it('should be visible', function () {
    return client
      .isVisible('.now-modal.visible').then(function(isVisible){
        expect(isVisible).to.equal(true);
      });
  });

  it('should close when the ESC key is pressed', function() {
    return client
      .keys('Escape')
      .isVisible('.now-modal.visible').then(function(isVisible){
        expect(isVisible).to.equal(false);
      });
  });

});
