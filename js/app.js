'use-strict';

//===========Global Variables==============

var categoryArray = ['insert', 'categories', 'here'];
var restaurantArray = [];
var biteLogEntryArray = [];

var galleryView = document.getElementById('gallery-view');
var listView = document.getElementById('list-view');

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

  biteLogEntryArray.push(this);
  restaurantArray.push(this.restaurant);
};

console.log('this should be bitelot', BiteLogEntry);

BiteLogEntry.prototype.renderSingleEntry = function (){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('class', 'food-pic');
  imgEl.src = this.src;
  galleryView.appendChild(imgEl);
};

BiteLogEntry.prototype.renderSingleList = function(){
  //Defining HTML elements
  var figureEl = document.createElement('figure');
  var figCapEl = document.createElement('figcaption');
  var imgEl = document.createElement('img');
  var h5El = document.createElement('h5');

  //Setting attributes
  figureEl.setAttribute('class', 'list-container')
  figCapEl.setAttribute('class', 'list-caption');
  imgEl.setAttribute('class', 'food-pic-list');

  //Defining
  imgEl.src = this.src;
  h5El.textContent = this.dishName;

  //Appending
  listView.appendChild(figureEl);
  figureEl.appendChild(imgEl);
  figureEl.appendChild(figCapEl);
  figCapEl.appendChild(h5El);
};


//============Test Entries==================

new BiteLogEntry('burger', 'Burger Joint', 'Pub Food', './assets/burger.jpg' , '5', true, 'Delicious');
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './assets/pasta.png', '3', false, 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', '4', false, 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', '2', false, 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zoodles.jpg', '1', false, 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', '5', true, 'so moist');
