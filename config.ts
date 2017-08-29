import { ProtractorBrowser, Config } from 'protractor';
declare var allure : any;

export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    'browserName': 'chrome'
    },
  specs: ['../build/specs/*.js'],
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000,
    isVerbose: true
  },
  onPrepare: () => {
   let globals = require('protractor');
   let browser = globals.browser;
   browser.waitForAngularEnabled(false);
   browser.manage().window().maximize();

  var AllureReporter = require('jasmine-allure-reporter');
  jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
          resultsDir: '../target/allure-results'
      }
  }));
 }
}