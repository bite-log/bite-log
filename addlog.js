'use strict';

var bodyEl = document.getElementById('body');
var newFoodLogForm = document.getElementById('add-log-form');

var foodLogHandler = function(event) {
  event.preventDefault();

  var dishName = event.target['menu-item'].value;
  var restaurant = event.target['restaurant-name'].value;
  var category = event.target['food-category'].value;
  var src = event.target['food-pic'].value;
  var rating = event.target['rating'].value;
  var isFavorite = event.target['checkbox'].value;
  var comment = event.target['comments'].value;
  console.log(dishName + restaurant + category + src + rating + isFavorite + comment);

  var newFoodLog = new BiteLogEntry(dishName, restaurant, category, src, rating, isFavorite, comment);
  localStorage.setItem('food-logs',JSON.stringify(newFoodLog));
  console.log(newFoodLog);
};

bodyEl.addEventListener('click');
console.log('click working');
newFoodLogForm.addEventListener('sumbit', foodLogHandler);
console.log('submit working?');

foodLogHandler();

// //=================Local Storage================
// var grabFoodLog = function() {
//   if(localStorage.getItem('food-logs')) {
//     console.log('hey there, find me in local storage');
//     biteLogEntryArray = JSON.parse(localStorage.setItem('food-logs'));
//   }
// }