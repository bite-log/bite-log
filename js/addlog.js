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
  new BiteLogEntry(dishName, restaurant, category, src, rating, isFavorite, comment);
  localStorage.setItem('bite-log', JSON.stringify(biteLogEntryArray));
  console.log('run');
};


newFoodLogForm.addEventListener('submit', foodLogHandler);
console.log('submit working?');

