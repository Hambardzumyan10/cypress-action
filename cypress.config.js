const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const addContext = require('mochawesome/addContext');

module.exports = defineConfig({
  projectId: "gh8qge",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/test_cases_report', // Ensure this is the correct folder
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'VBET',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);

      // Add custom task for addContext
      on('task', {
        addContext({ test, context }) {
          console.log('Task adding context:', context); // Debug log
          addContext({ test }, context);
          return null;
        }
      });

      // Additional node event listeners can be implemented here
    },
    experimentalStudio: true,
    pageLoadTimeout: 120000,
    viewportWidth: 1920,  
    viewportHeight: 1080,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  chromeWebSecurity: false
});
