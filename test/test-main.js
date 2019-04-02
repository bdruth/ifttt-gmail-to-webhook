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
    t.true(Array.isArray(searchConfigs));
    t.true(searchConfigs.length > 0);
    
    t.plan(3 + searchConfigs.length);
    searchConfigs.forEach((config) => {
      t.true(config instanceof Search);
    });
});