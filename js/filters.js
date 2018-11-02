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
  userFilter = filterLogs.options[filterLogs.selectedIndex].value;

  var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
    return a.rating - b.rating;
  });

  console.log('filter has changed to ' + userFilter);
  if(userFilter === 'filter-favs') {
    for(var i in totalBites) {
      console.log('in the for loop');
      if(totalBites[i].isFavorite) {
        console.log('here I am In The If!');
        biteLogEntryArray = [];
        biteLogEntryArray.push(totalBites[i]);
        console.log(totalBites[i]);
      }
    }
  } else if (userFilter === 'filter-ratinghl') {
    console.log('1st else if');
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


categorySelections.addEventListener('onchange', categorySortHandler);

var filterLogs = document.getElementById('filter-by');
filterLogs.addEventListener('onchange', filterHandler);
