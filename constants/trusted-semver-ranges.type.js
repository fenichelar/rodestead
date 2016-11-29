module.exports = {
  friendlyName: 'Trusted semver ranges',
  description: 'A set of trusted semver ranges of internal and/or core packages.',
  extendedDescription:
  'There are also certain dependencies which our team directly maintains.\n'+
  '\n'+
  'Since we have the direct ability to publish patches, we are ultimately responsible for\n'+
  'ensuring that those dependencies use proper semantic versioning.  In an effort to keep\n'+
  'us honest and make sure that we only break features on major version bumps, we use loose\n'+
  'semver ranges for our internal dependencies as much as possible.\n'+
  '\n'+
  'This is not by any means a complete list-- it just has a few of the most commonly-used\n'+
  'packages that we maintain.  It will be expanded over time.\n'+
  '',
  example: {},
  defaultsTo: {
    'sails': '*',

    'sails-hook-sockets': '^1.0.1',
    'sails-hook-orm': '^1.0.7',
    'sails-hook-grunt': '^1.0.0',

    'sails-hook-dev': '^1.1.0',
    'sails-hook-apianalytics': '^1.1.3',

    'waterline': '*',
    'sails-disk': '^0.10.10',
    'sails-memory': '^0.10.7',
    'sails-mysql': '^0.11.5',
    'sails-postgresql': '^0.11.4',

    'waterline-criteria': '^1.0.1',
    'waterline-cursor': '^0.0.7',
    'waterline-adapter-tests': '^0.12.1',

    'skipper': '*',
    'skipper-disk': '*',
    'skipper-adapter-tests': '^1.5.8',

    'include-all': '^1.0.5',
    'sails.io.js': '^1.0.0',
    'sails.io.js-dist': '^1.0.0',

    'sails-generate': '^1.4.0',
    'grunt-sails-linker': '^1.0.3',
    'sort-route-addresses': '^0.0.1',

    'sails-stdlib': '*',
    'stdlib': '*',
    'machinepack-ifthen': '*',
    'machinepack-strings': '*',
    'machinepack-numbers': '*',
    'machinepack-booleans': '*',
    'machinepack-dictionaries': '*',
    'machinepack-arrays': '*',
    'machinepack-json': '*',
    'machinepack-datetime': '*',
    'machinepack-math': '*',
    'machinepack-paths': '*',
    'machinepack-urls': '*',
    'machinepack-emailaddresses': '*',
    'machinepack-fs': '*',
    'machinepack-http': '*',
    'machinepack-process': '*',
    'machinepack-console': '*',
    'machinepack-util': '*',
    'machinepack-waterline': '*',
    'machinepack-sockets': '*',
    'machinepack-reqres': '*',
    'machinepack-sessionauth': '*',
    'machinepack-passwords': '*',
    'machinepack-mailgun': '*',
    'machinepack-gravatar': '*',
    'machinepack-sails': '*',

    'anchor': '*',
    'machine': '*',
    'rttc': '*',
    'switchback': '^2.0.1',
    'reportback': '^2.0.1',
    'captains-log': '^1.0.1',

    'flaverr': '^1.0.0',
    'aim-error-at': '*',
    'machine-as-script': '*',
    'machine-as-action': '*',
    'browserify-transform-machinepack': '*',
    'test-machinepack-mocha': '*',
    'test-machinepack': '*',

    'machinepack-npm': '*',
    'machinepack-localmachinepacks': '*',
    'machinepack-stripe': '*',
    'machinepack-markdown': '*',

    '@sailshq/lodash': '*',

    // This is not a complete list
    // (TODO: add to this list and expand ranges as it makes sense, over time)
  }
};
