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
  var tmp_thread = threads[0]
  Logger.log(tmp_thread.getFirstMessageSubject());

  var payload =
      {
        "value1" : tmp_thread.getMessages()[0].getFrom(),
        "value2" : tmp_thread.getMessages()[0].getDate().toLocaleTimeString(),
        "value3" : tmp_thread.getMessages()[0].getSubject(),
      };
  
  var options =
      {
        "method"  : "POST",
        "payload" : payload,   
        "followRedirects" : true,
        "muteHttpExceptions": true
      };
  
  var url = PropertiesService.getScriptProperties().getProperty('ifttt-webhook-url');
  var result = UrlFetchApp.fetch(url, options);
}
