'use strict';

//=======Global Variables======
var categorySelections = document.getElementById('food-category');
var filterLogs = document.getElementById('filter-by');
var totalBites = [...biteLogEntryArray]; //duplicates the array 

//=======Sort by Category=======
var categorySortHandler = function(event){
  biteLogEntryArray = []; //empties out the array so it can be rendered appropriately in list/grid view
  var userCategory = categorySelections.options[categorySelections.selectedIndex].value; //selected value from drop down list
  console.log('category has changed to ' + userCategory);
  if (userCategory === 'default'){
    biteLogEntryArray = [...totalBites]; //if user changes to "view all", it reloads the array with the duplicated one to show all
  }
  for (var i in totalBites){
    if (totalBites[i].category === userCategory){ //if user changes to a certain category
      biteLogEntryArray.push(totalBites[i]); //it goes through a for-loop of all bites and only pushes in the ones from that category
      console.log(totalBites[i]);
    }
  }
  refreshAndRerender();
};

//=====Filter Handler====
var filterHandler = function(event) {
  var userFilter = filterLogs.options[filterLogs.selectedIndex].value; //gathers selected value from drop down list

  var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
    return a.rating - b.rating; //returns a sorted array
  });

  console.log('filter has changed to ' + userFilter);
  if (userFilter === 'category'){
    categoryCreator();
  } else{
    var dropDownList = document.getElementById('food-category');
    dropDownList.setAttribute('class', 'hidden');
  }
  if(userFilter === 'filter-favs') { //if user selects 'favorites'
    biteLogEntryArray = []; //empties array
    for(var i in totalBites) { //similar to the category, goes into a for-loop and pushes the favorites
      console.log('in the for loop');
      if(totalBites[i].isFavorite) {
        console.log('here I am In The If!');
        biteLogEntryArray.push(totalBites[i]);
        console.log(totalBites[i]);
      }
    }
    refreshAndRerender();
    biteLogEntryArray = [...totalBites];
  } else if (userFilter === 'filter-ratinghl') {
    sortFromLowest.reverse();
    refreshAndRerender();
  } else if (userFilter === 'filter-ratinglw') {
    sortFromLowest;
    refreshAndRerender();
  } else if (userFilter === 'default') {
    biteLogEntryArray = [...totalBites];
    refreshAndRerender();
  }
};

var refreshAndRerender = function(){ //Re-renders based on which view is selected.
  refreshSection();
  if (document.getElementById('grid-icon').className === 'icon-selected'){
    renderGallery(biteLogEntryArray);
  } else{
    renderList(biteLogEntryArray);
  }
};

//Event Handlers
categorySelections.addEventListener('onchange', categorySortHandler);
filterLogs.addEventListener('onchange', filterHandler);
