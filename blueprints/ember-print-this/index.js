/* eslint-env node */

var RSVP = require('rsvp');

module.exports = {
  description: '',

  normalizeEntityName: function() {
    //noop
  },

  afterInstall: function() {
    return RSVP.all([
      this.addAddonToProject('print-this'),
      this.addAddonToProject('ember-browserify'),
    ]);
  }
};
