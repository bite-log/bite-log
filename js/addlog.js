'use strict';

var newFoodLogForm = document.getElementById('add-log-form');

var foodLogHandler = function(event) {
  event.preventDefault();

  var dishName = event.target['menu-item'].value;
  var restaurant = event.target['restaurant-name'].value;
  var category = event.target['food-category'].value;
  var src = event.target['url'].value;
  var rating = event.target['rating'].value;
  var isFavorite = event.target['checkbox'].value;
  var comment = event.target['comments'].value;
  console.log(dishName + restaurant + category + src + rating + isFavorite + comment);

  console.log('inside');
  localStorage.setItem('food-logs',JSON.stringify(dishName + restaurant + category + src + rating + isFavorite + comment));
  console.log('run');
};


newFoodLogForm.addEventListener('submit', foodLogHandler);
console.log('submit working?');


// //=================Local Storage================
// var grabFoodLog = function() {
//   if(localStorage.getItem('food-logs', JSON.parse())) {
//     console.log('hey there, find me in local storage');
  