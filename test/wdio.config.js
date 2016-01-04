

exports.config = {

  // =====================
  // Server Configurations
  // =====================
  // Host address of the running Selenium server. This information is usually obsolete as
  // WebdriverIO automatically connects to localhost. Also if you are using one of the
  // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
  // need to define host and port information because WebdriverIO can figure that our
  // according to your user and key information. However if you are using a private Selenium
  // backend you should define the host address, port, and path here.
  //
  host: '127.0.0.1',
  port: 4444,
  path: '/wd/hub',


  specs: [
    'test/functional/**'
  ],
  capabilities: [{
    browserName: 'phantomjs',
  }],
  logLevel: 'silent', //verbose | silent | command | data | result
  coloredLogs: true,
  baseUrl: 'http://localhost:3004',
  waitforTimeout: 1000,
  framework: 'mocha',
  reporter: 'spec',

  reporterOptions: {
    //
    // If you are using the "xunit" reporter you should define the directory where
    // WebdriverIO should save all unit reports.
    outputDir: './test/outputs'
  },
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register']
  }
};
