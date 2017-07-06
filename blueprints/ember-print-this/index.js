/* eslint-env node */

var RSVP = require('rsvp');

module.exports = {
  description: '',

  normalizeEntityName: function() {
    //noop
  },

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('print-this'),
      this.addAddonToProject('ember-browserify'),
    ]);
  }
};
