const fs = require('fs');
const test = require('tape');

// Load everything into current (global) scope to emulate GAS flat namespace
eval(fs.readFileSync(__dirname+'/testAppContext.js')+'');

test('Search entity encapsulates searchString', function(t) {
  t.plan(2);

  var search = new Search("from:apple.com");
  t.ok(search);
  t.equals(search.searchString, "from:apple.com");
});

test('searchConfigs is an array of Search objects', function (t) {
    t.plan(3);

    t.ok(searchConfigs);
    t.ok(Array.isArray(searchConfigs));
    t.ok(searchConfigs.length > 0);

    t.plan(3 + searchConfigs.length);
    for (var i; i < searchConfigs.length; i++) {
      var config = searchConfigs[i];
      t.ok(config instanceof Search);
    }
});