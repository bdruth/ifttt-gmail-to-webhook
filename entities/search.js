function Search(searchString) {
  this.searchString = searchString;
}

function convertToSearchCollection(rowColumnData) {
  var searchCollection = [];
  for(var i=0; i<rowColumnData.length; i++) {
    searchCollection.push(new Search(rowColumnData[i][0]));
  }
  return searchCollection;
}
