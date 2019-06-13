'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'engine-alpha',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  namespace: 'alpha',

  isDevelopingAddon() {
    return true;
  }
});
