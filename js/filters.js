// 'use strict';

// //==========Sort by Favorite==========

// var favorites = biteLogEntryArray.filter(function (fav) {
//   return fav.isFavorite === true;
// });

// //======Sort from Lowest to Highest, Highest to Lowest=========
// var sortFromLowest = biteLogEntryArray.sort(function (a, b) {
//   return a.rating - b.rating;
// });

// //====Filter Calls
// favorites;
// sortFromLowest;
// sortFromLowest.reverse();

// //=======Sort by Category=======

// var pubCat = biteLogEntryArray.filter(function (style) {
//   return style.category === 'Pub';
// });

// var italianCat = biteLogEntryArray.filter(function (style) {
//   return style.category === 'Italian';
// });

// var coffeeCat = biteLogEntryArray.filter(function (style) {
//   return style.category === 'Coffee & Tea';
// });

// //=====Filter Handler====

// //Must render for both gallery & list view (must persist through view change?) -- nested if statements?

// var filterHandler = function(event) {
//   if(event.target.id === 'favorites-filter') {
//     favorites;
//     refreshSection();
//     //render ONLY favorites
//   } else if (event.target.id === 'highlow-filter') {
//     sortFromLowest.reverse();
//     refreshSection();
//     //render in order high to low
//   } else if (event.target.id === 'lowhigh-filter') {
//     sortFromLowest;
//     refreshSection();
//     //render in order low to high
//   } else { //if 'Filter By' remains
//     //do nothing
//   }
// };
// var filterLogs = document.getElementById('filter-by');
// filterLogs.addEventListener('change', filterHandler);

// //=======Sort by Category Handler

// var categorySortHandler = function(event) {
//   //function call
//   refreshSection();
//   //render only those in the selected category
// };

// var sortByCategory = document.getElementById('food-category');
// sortByCategory.addEventListener('change', categorySortHandler);
