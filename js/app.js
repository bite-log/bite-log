'use-strict';

//===========Global Variables==============

var categoryArray = ['insert', 'categories', 'here'];
var restaurantArray = [];
var biteLogEntryArray = [];

//==========Constructor Functions==========

var UserProfile = function (username, spice, src) {
  this.userName = username;
  this.spice = spice;
  this.userImage = src;

  this.uniqueRestaurauntCount = 0;
  this.uniqueEntryArray = 0;
};

var BiteLogEntry = function (dish, restaurant, category, src, rating) {
  this.dishName = dish;
  this.restaurant = restaurant;
  this.category = category;
  this.src = src;

  this.rating = rating;
  this.isfavorite = isfavorite;
  this.comment = comment;

  biteLogEntryArray.push(this.restaurant);
  restaurantArray.push(this.restaurant);
};

BiteLogEntry.prototype.renderEntery() {


};

//============Test Entries==================

new BiteLogEntry('burger', 'Burger Joint', 'Pub Food', './img/burger.jpg', '5', 'yes', 'Delicious');
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './img/pasta.jpg', '3', 'no', 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './img/potroast.jpg', '4', 'no', 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './img/chili.jpg', '2', 'no', 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './img/zoodles', '1','no', 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './img/cake.jpg', '5', 'yes', 'so moist');

//===========Test Profiles=================