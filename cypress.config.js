const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    viewportWidth : 1280,
    viewportHeight : 720,
    video : true,
    videoCompression : 32,
    screenshots : true,
    screenshotOnRunFailure: true,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
