const { defineConfig } = require("cypress");
const preprocessor= require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on,config){
 await preprocessor.addCucumberPreprocessorPlugin(on,config)
 on("file:preprocessor",browserify.default(config))
 require('cypress-mochawesome-reporter/plugin')(on);
 return config; 
}

module.exports = defineConfig({
  projectId: 'ohmdp2',
  reporter: 'cypress-mochawesome-reporter',  
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    specPattern: 'cypress/e2e/BDD/features/**/*.feature',
    watchForFileChanges:true,
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
    setupNodeEvents
  },
});
