const fs = require('fs');

eval(fs.readFileSync(__dirname+'/../entities/search.js')+'');

var rulesSheetId = 'blah';
var searchConfigs = [new Search("from:apple.com")];