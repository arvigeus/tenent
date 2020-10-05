/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const browserify = require("@cypress/browserify-preprocessor");

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, _config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("task", {
    log(message) {
      // eslint-disable-next-line no-console
      console.log(message);

      return null;
    },
    table(message) {
      console.table(message);

      return null;
    },
  });

  // FIXME: https://github.com/cypress-io/cypress/issues/2983#issuecomment-570616682
  on(
    "file:preprocessor",
    browserify({
      typescript: require.resolve("typescript"),
    })
  );
};