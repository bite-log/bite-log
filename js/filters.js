'use strict';



// //==========Sort by Favorite==========

// var favorites = biteLogEntryArray.filter(function (fav) {
//   return fav.isFavorite === true;
// });

// //======Sort from Lowest to Highest, Highest to Lowest=========
// var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
//   return a.rating - b.rating;
// });

// //====Filter Calls
// // favorites;
// sortFromLowest;
// sortFromLowest.reverse();

//=======Sort by Category=======
var categorySelections = document.getElementById('food-category');


var totalBites = [...biteLogEntryArray];

var categorySortHandler = function(event){
  biteLogEntryArray = [];
  var userCategory = categorySelections.options[categorySelections.selectedIndex].value;
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
};

// //=====Filter Handler====
var userFilter;

var filterHandler = function(event) {
  userFilter = filterLogs.options[filterLogs.selectedIndex].value;
  
  var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
    return a.rating - b.rating;
  });
  
  console.log('filter has changed to ' + userFilter);
  if(userFilter === 'filter-favs') {
    for(var i in totalBites) {
      if(totalBites[i].isfavorite) {
        biteLogEntryArray = [];
        console.log('hereIamInTheIf!');
        biteLogEntryArray.push(totalBites[i]);
        console.log(totalBites[i]);
      }
    }
  } else if (userFilter === 'filter-ratinghl') {
    sortFromLowest.reverse();
  } else if (userFilter === 'filter-ratinglw') {
    sortFromLowest;
  } else if (userFilter === 'default') {
    biteLogEntryArray = [...totalBites];
  }
  refreshSection();
  if (document.getElementById('grid-icon').className === 'icon-selected'){
    renderGallery(biteLogEntryArray);
  } else{
    renderList(biteLogEntryArray);
  }
};


var categorySelections = document.getElementById('food-category');

categorySelections.addEventListener('onchange', categorySortHandler);

var filterLogs = document.getElementById('filter-by');
filterLogs.addEventListener('onchange', filterHandler);
