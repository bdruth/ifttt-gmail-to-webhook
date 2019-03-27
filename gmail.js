function getSearchConfigs() {
  var rulesSheetId = PropertiesService.getScriptProperties().getProperty('rules-sheet-id');
  Logger.log('rules-sheet-id: ' + rulesSheetId);
  var ss = SpreadsheetApp.openById(rulesSheetId);
  var sheet = ss.getSheets()[0];
  var range = ss.getRange("A2");
  var values = range.getDisplayValues();
  return values[0][0];
}

function searchGmail() {
  var searchString = getSearchConfigs();
  Logger.log('search-string: ' + searchString);

  var threads = GmailApp.search("in:inbox " + searchString);
  for (var i=0; i < threads.length; i++) {
    Logger.log(threads[i].getFirstMessageSubject());
  }
}
