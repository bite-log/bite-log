'use strict';

var viewIconSection = document.getElementById('view-icons');
var listIcon = document.getElementById('list-icon');
var gridIcon = document.getElementById('grid-icon');

//Event handlers
var changeViewHandler = function(event){
  if (event.target.id === 'grid-icon'){
    listIcon.removeAttribute('class');
    gridIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderGallery();
    console.log('grid clicked');
  } else if (event.target.id === 'list-icon'){
    gridIcon.removeAttribute('class');
    listIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderList();
    console.log('list clicked');
  }
};

//Function Calls
var refreshSection = function(){
  while(galleryView.firstChild){
    galleryView.removeChild(galleryView.firstChild);
    console.log('removing');
  }
  while(listView.firstChild){
    listView.removeChild(listView.firstChild);
  }
};
var renderGallery = function () {
  console.log('render gallery');
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
viewIconSection.addEventListener('click', changeViewHandler);
changeViewHandler();

