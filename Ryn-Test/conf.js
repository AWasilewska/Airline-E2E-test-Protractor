const { Browser, Capabilities } = require("selenium-webdriver");

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:8888/wd/hub',
  specs: ['Spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 1440000 //to prevet async error message.
  }
};