/* eslint-disable */
Package.describe({
  name: 'pushplaybang:ballyhoo',
  version: '0.0.2',
  summary: 'Bloody simple pub/sub JS events',
  git: 'https://github.com/Pushplaybang/ballyhoo',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('pushplaybang:common-polyfills@0.0.1');
  api.addFiles('ballyhoo.js');
  api.export('Ballyhoo', ['client', 'server']);
});
