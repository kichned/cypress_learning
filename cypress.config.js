const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    baseUrl: 'https://www.bstackdemo.com/',
    testIsolation: true
  },
  env: {
    username: 'demouser',
    password: 'testingisfun99'
  },
});
