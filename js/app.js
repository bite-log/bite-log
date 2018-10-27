'use-strict';

//===========Global Variables==============

var categoryArray = ['Chinese', 'Japanese', 'Vietnamese', 'Korean', 'Thai', 'Greek', 'Mexican', 'Mediterranean', 'Cocktail Bars', 'Food Truck', 'Italian', 'French', 'Fast Food', 'Fast Casual', 'Fine Dining', 'Pub', 'Coffee & Tea', 'Dessert', 'Barbecue', 'Buffet', 'Seafood', 'Deli', 'American', 'Pizza', 'Vegan', 'Tapas/Small Plates', 'Breakfast & Brunch'];
var restaurantArray = [];
var biteLogEntryArray = [];
var userProfileArray = [];

var galleryView = document.getElementById('gallery-view');
var listView = document.getElementById('list-view');
var newUserForm = document.getElementById('newuser-form');

//==========Constructor Functions==========

var UserProfile = function (username, spice, src) {
  this.userName = username;
  this.spice = spice;
  this.userImage = src;

  this.uniqueRestaurauntCount = 0;
  this.uniqueEntryArray = 0;

  userProfileArray.push(this);
};

var BiteLogEntry = function(dish, restaurant, category, src, rating, isFav, comment) {
  this.dishName = dish;
  this.restaurant = restaurant;
  this.category = category;
  this.src = src;
  this.rating = rating;

  this.isFavorite = isFav;
  this.comment = comment;

  biteLogEntryArray.unshift(this);
  restaurantArray.push(this.restaurant);
};

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
  var favEl = document.createElement('i');
  var h5El = document.createElement('h5');
  var h6El = document.createElement('h6');
  var spanEl = document.createElement('span');
  var commentEl = document.createElement('p');

  //Setting attributes
  figureEl.setAttribute('class', 'list-container');
  figCapEl.setAttribute('class', 'list-caption');
  imgEl.setAttribute('class', 'food-pic-list');

  //Defining
  imgEl.src = this.src;
  h5El.textContent = this.dishName;
  h6El.textContent = this.restaurant;
  spanEl.textContent = this.category;
  commentEl.textContent = this.comment;

  //Appending
  listView.appendChild(figureEl);
  figureEl.appendChild(imgEl);
  figureEl.appendChild(figCapEl);
  figCapEl.appendChild(h5El);

  //if Favorited
  if (this.isFavorite === true){
    favEl.setAttribute('class', 'fas fa-heart');
  } else{
    favEl.setAttribute('class', 'far fa-heart');
  }

  //Number of stars
  for(var i = 0; i < this.rating; i++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'fas fa-star');
    figCapEl.appendChild(starEl);
  }
  for (var x = 0; x < (5 - this.rating); x++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'far fa-star');
    figCapEl.appendChild(starEl);
  }

  figCapEl.appendChild(h6El);
  figCapEl.appendChild(spanEl);
  figCapEl.appendChild(favEl);
  figCapEl.appendChild(commentEl);
};

//=============Event Handlers===============
var createNewUserHandler = function(event){
  console.log(event);
  event.preventDefault();
  var name = event.target.name.value;
  var spice = event.target.spice.value;
  var src = event.target.profilepic.value;

  console.log(name + spice + src);

  new UserProfile(name, spice, src);
};

//============Test Entries==================

new BiteLogEntry('burger', 'Burger Joint', 'Pub Food', './assets/burger.jpg' , '5', true, 'Delicious');
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './assets/pasta.png', 3, false, 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', 4, false, 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', 2, false, 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zoodles.jpg', 1, false, 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', 5, true, 'so moist');

//===========Function Calls================

newUserForm.addEventListener('submit', createNewUserHandler);
