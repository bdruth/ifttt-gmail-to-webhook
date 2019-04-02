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

  var searchConfigs = getSearchConfigs();
  t.ok(searchConfigs);
  t.ok(Array.isArray(searchConfigs));
  t.ok(searchConfigs.length > 0);

  t.plan(3 + searchConfigs.length);
  for (var i=0; i < searchConfigs.length; i++) {
    var config = searchConfigs[i];
    t.ok(config instanceof Search);
  }
});

test('convertToSearchCollection converts row/column data to array of Search', function(t) {
  t.plan(2);

  const rowColumnData = [['from:apple.com'],['in:inbox']];
  var arrayOfSearches = convertToSearchCollection(rowColumnData);
  t.ok(arrayOfSearches);
  t.equals(arrayOfSearches.length, 2);
  t.plan(2 + arrayOfSearches.length*2);
  for (var i=0; i < arrayOfSearches.length; i++) {
    var config = arrayOfSearches[i];
    t.ok(config instanceof Search);
    t.equals(config.searchString,rowColumnData[i][0]);
  }
});

test('searchMailAndNotify searches with searchConfigs', function(t) {
  t.plan(1);

  t.pass();
});