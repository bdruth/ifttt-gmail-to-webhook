const fs = require('fs');

eval(fs.readFileSync(__dirname+'/../entities/search.js')+'');
eval(fs.readFileSync(__dirname+'/../external/localConfigurationGateway.js')+'');

var rulesSheetId = 'blah';
