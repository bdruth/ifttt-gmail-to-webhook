const fs = require('fs');
const test = require('tape');

// Load everything into current (global) scope to emulate GAS flat namespace
var Search = eval(fs.readFileSync(__dirname+'/testAppContext.js')+'');

test('searchConfigs is a valid data structure', function (t) {
    t.plan(4);

    t.ok(searchConfigs);
    t.true(Array.isArray(searchConfigs));
    t.true(searchConfigs.length > 0);
    t.equals(typeof searchConfigs[0].searchString, 'string');
});