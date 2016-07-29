/* eslint-disable */
Package.describe({
  name: 'pushplaybang:ballyhoo',
  version: '0.0.4',
  summary: 'Bloody simple pub/sub JS events',
  git: 'https://github.com/Pushplaybang/ballyhoo',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.mainModule('ballyhoo.js');
});
