const fs = require('fs');
const test = require('tape');

// Load everything into current (global) scope to emulate GAS flat namespace
eval(fs.readFileSync(__dirname+'/testAppContext.js')+'');

test('searchConfigs is a valid data structure', function (t) {
    t.plan(1);

    t.ok(searchConfigs);
});