module.exports = {

  'before': function (browser) {
    browser.url(browser.globals.TARGET_PATH);
    browser.waitForElementVisible('.accordion-item-title', 5000);
  },

  'after': function (browser) {
    browser.end();
  },

  'It should start closed': function (browser) {
    browser.url(browser.globals.TARGET_PATH);
    browser.assert.hidden('.accordion-item-content');
  },

  'It should open when the title is clicked': function (browser) {
    browser.url(browser.globals.TARGET_PATH);
    browser.assert.hidden('.accordion-item-content');
    browser.click('.accordion-item-title', function () {
      browser.pause(500);
      browser.expect.element('.now-accordion-item.visible').to.be.present;
      browser.assert.visible('.accordion-item-content');
    });
  },

  'It should close when title clicked and open': function (browser) {
    browser.url(browser.globals.TARGET_PATH);
    browser.assert.hidden('.accordion-item-content');
    browser.click('.accordion-item-title', function () {
      browser.pause(500);
      browser.expect.element('.now-accordion-item.visible').to.be.present;
      browser.assert.visible('.accordion-item-content');
      browser.click('.accordion-item-title', function () {
        browser.pause(500);
        browser.expect.element('.now-accordion-item.visible').to.not.be.present;
        browser.assert.hidden('.accordion-item-content');
      });
    });
  },

  'It should not close the accordion item when content is clicked': function (browser) {
    browser.url(browser.globals.TARGET_PATH);
    browser.assert.hidden('.accordion-item-content');
    browser.click('.accordion-item-title', function () {
      browser.pause(500);
      browser.expect.element('.now-accordion-item.visible').to.be.present;
      browser.assert.visible('.accordion-item-content');
      browser.click('.accordion-item-content', function () {
        browser.pause(500);
        browser.assert.visible('.accordion-item-content');
      });
    });
  }
};
