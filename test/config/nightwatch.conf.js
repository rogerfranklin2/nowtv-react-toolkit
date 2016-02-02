const argv = require('yargs')
  .usage('Usage: $0 --target=[string] --sha=[string] --bskey=[string]')
  .argv;

module.exports = (function (settings) {
  settings.test_settings.default.globals = {
    TARGET_PATH: argv.target || 'http://localhost:3003'
  };
  settings.test_settings.default.desiredCapabilities['browserstack.key'] = argv.bskey || process.env.BROWSERSTACK_KEY;
  settings.test_settings.default.desiredCapabilities.build = 'Build ' + (argv.sha || 'local');
  return settings;
})(require('./nightwatch.json'));
