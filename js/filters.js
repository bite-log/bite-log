'use strict';



// //==========Sort by Favorite==========

// var favorites = biteLogEntryArray.filter(function (fav) {
//   return fav.isFavorite === true;
// });

// //======Sort from Lowest to Highest, Highest to Lowest=========
var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
  return a.rating - b.rating;
});

//====Filter Calls
// favorites;
sortFromLowest;
sortFromLowest.reverse();

//=======Sort by Category=======
var userCategory;

var totalBites = [...biteLogEntryArray];
var categorySortHandler = function(event){
  biteLogEntryArray = [];
  userCategory = categorySelections.options[categorySelections.selectedIndex].value;
  console.log('category has changed to ' + userCategory);
  if (userCategory === 'default'){
    biteLogEntryArray = [...totalBites];
  }
  for (var i in totalBites){
    if (totalBites[i].category === userCategory){
      biteLogEntryArray.push(totalBites[i]);
      console.log(totalBites[i]);
    }
  }
  refreshSection();
  if (document.getElementById('grid-icon').className === 'icon-selected'){
    renderGallery(biteLogEntryArray);
  } else{
    renderList(biteLogEntryArray);
  }
};

// //=====Filter Handler====
var userFilter;

var filterHandler = function(event) {
  biteLogEntryArray = [];
  userFilter = filterLogs.options[filterLogs.selectedIndex].value;
  console.log('filter has changed to ' + userFilter);
  if(event.target.id === 'favorites-filter') {
    var favorites = biteLogEntryArray.filter(function (fav) {
      return fav.isFavorite === true;
    });
    biteLogEntryArray.push(favorites);
    refreshSection();
    if (document.getElementById('grid-icon').className === 'icon-selected'){
      renderGallery(biteLogEntryArray);
    } else{
      renderList(biteLogEntryArray);
    }
  } else if (event.target.id === 'highlow-filter') {
    sortFromLowest.reverse();
    refreshSection();
    //render in order high to low
  } else if (event.target.id === 'lowhigh-filter') {
    sortFromLowest;
    refreshSection();
    //render in order low to high
  } else { //if 'Filter By' remains
    //do nothing
  }
};
var filterLogs = document.getElementById('filter-by');
filterLogs.addEventListener('onchange', filterHandler);


var categorySelections = document.getElementById('food-category');
categorySelections.addEventListener('onchange', categorySortHandler);
