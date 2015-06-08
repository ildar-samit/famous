Package.describe({
  name: 'ildar:famous',
  version: '0.5.2',
  summary: 'Famous packaged for Meteor',
  git: 'https://github.com/ildarsamit/famous',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('src/famous.min.js', 'client');
  api.addFiles('namespace.js');
  api.export('Famous');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ildar:famous');
  api.addFiles('famous-tests.js');
});
