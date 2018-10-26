'use-strict';

//===========Global Variables==============

var categoryArray = ['insert', 'categories', 'here'];
var restaurantArray = [];
var biteLogEntryArray = [];

var displayEl = document.getElementById('gallery-view');

//==========Constructor Functions==========

var UserProfile = function (username, spice, src) {
  this.userName = username;
  this.spice = spice;
  this.userImage = src;

  this.uniqueRestaurauntCount = 0;
  this.uniqueEntryArray = 0;
};

var BiteLogEntry = function(dish, restaurant, category, src, rating) {
  var isfavorite = null;
  var comment = null;
  this.dishName = dish;
  this.restaurant = restaurant;
  this.category = category;
  this.src = src;
  this.rating = rating;

  this.isfavorite = isfavorite;
  this.comment = comment;

  this.width = 315;
  this.height = 190;
  
  biteLogEntryArray.push(this);
  restaurantArray.push(this.restaurant);
};

console.log('this should be bitelot', BiteLogEntry);

BiteLogEntry.prototype.renderSingleEntry = function (){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('class', 'food pic');
  imgEl.src = this.src;
  displayEl.appendChild(imgEl);
};

var renderAll = function () {
  for (var i in biteLogEntryArray) {
    biteLogEntryArray[i].renderSingleEntry();
  }
};

//============Test Entries==================

new BiteLogEntry('burger', 'Burger Joint', 'Pub Food', './assets/burger.jpg' , '5', 'yes', 'Delicious');
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './assets/pasta.png', '3', 'no', 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', '4', 'no', 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', '2', 'no', 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zoodles.jpg', '1','no', 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', '5', 'yes', 'so moist');

//==========Function Calls=================

renderAll();
