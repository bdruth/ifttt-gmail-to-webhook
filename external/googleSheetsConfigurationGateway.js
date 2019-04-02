function getSearchConfigs(rulesSheetId, sheetIndex, range) {
  Logger.log('rules-sheet-id: ' + rulesSheetId);
  var ss = SpreadsheetApp.openById(rulesSheetId);
  var sheet = ss.getSheets()[sheetIndex];
  var range = ss.getRange(range);
  var values = range.getDisplayValues();
  return convertToSearchCollection(values);
}
