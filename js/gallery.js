'use strict';

var renderGallery = function () {
  for (var i in biteLogEntryArray) {
    biteLogEntryArray[i].renderSingleEntry();
  }
};

var renderList = function(){
  for (var i in biteLogEntryArray) {
    biteLogEntryArray[i].renderSingleList();
  }
};

renderGallery();
renderList();
