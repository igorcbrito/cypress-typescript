const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'https://saucedemo.com/'
    },
  },
});
