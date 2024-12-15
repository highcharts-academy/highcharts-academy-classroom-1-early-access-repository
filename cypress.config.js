//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
//  e2e: {
//    specPattern: "tests/**/*.test.cy.js",
//    supportFile: "tests/support.cy.js",
//  }
//});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'reporters/my-reporter.js', // relative path to your custom reporter
  e2e: {
    specPattern: "tests/**/*.test.cy.js",
    supportFile: "tests/support.cy.js",
  }
});
