/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-print-this',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/print-this/printThis.js');
  }
};
