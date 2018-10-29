'use strict';
// =========Global Variables for Gallery Page ====================
var viewIconSection = document.getElementById('view-icons');
var listIcon = document.getElementById('list-icon');
var gridIcon = document.getElementById('grid-icon');

var bitesCount = 0;
var restaurantCounter = 0;

//========Entry constructor function==============================
var BiteLogEntry = function(dish, restaurant, category, src, rating, isFav, comment) {
  this.dishName = dish;
  this.restaurant = restaurant;
  this.category = category;
  this.src = src;
  this.rating = rating;

  this.isFavorite = isFav;
  this.comment = comment;

  biteLogEntryArray.unshift(this);
  allRestaurantArray.push(this.restaurant);
  bitesCount++;
  console.log(bitesCount);

  this.renderBitesCount();
  this.renderRestaurantCount();
};

BiteLogEntry.prototype.renderBitesCount = function (){
  var biteCountEl = document.getElementById('bite-count');
  biteCountEl.textContent = bitesCount;
};

BiteLogEntry.prototype.renderRestaurantCount = function (){
  for (var i = 0; i < allRestaurantArray.length; i++) {
    if(uniqueRestaurantArray.indexOf(allRestaurantArray[i]) === -1) {
      uniqueRestaurantArray.push(allRestaurantArray[i]);
      restaurantCounter++;
    }
  }
  var restaurantCountEl = document.getElementById('restaurant-count');
  restaurantCountEl.textContent = restaurantCounter;
};

BiteLogEntry.prototype.renderSingleGalleryItem = function (){
  //Define HTML elements
  var galleryView = document.getElementById('gallery-view');
  var gridItemEl = document.createElement('section');
  var imgEl = document.createElement('img');
  var overlay = document.createElement('div');
  var h2El = document.createElement('h2');
  var h5El = document.createElement('h5');

  //Set attributes
  gridItemEl.setAttribute('class', 'grid-container');
  imgEl.setAttribute('class', 'food-pic-grid');
  overlay.setAttribute('class', 'overlay');

  //Define content
  imgEl.src = this.src;
  h2El.textContent = this.dishName;
  h5El.textContent = this.restaurant;

  //Appending
  galleryView.appendChild(gridItemEl);
  gridItemEl.appendChild(overlay);
  gridItemEl.appendChild(imgEl);
  overlay.appendChild(h2El);
  overlay.appendChild(h5El);

  //Number of stars
  for(var i = 0; i < this.rating; i++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'fas fa-star');
    overlay.appendChild(starEl);
  }
  for (var x = 0; x < (5 - this.rating); x++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'far fa-star');
    overlay.appendChild(starEl);
  }  
};

BiteLogEntry.prototype.renderSingleListItem = function(){
  //Defining HTML elements
  var figureEl = document.createElement('figure');
  var figCapEl = document.createElement('figcaption');
  var imgEl = document.createElement('img');
  var favEl = document.createElement('i');
  var h5El = document.createElement('h5');
  var h6El = document.createElement('h6');
  var pEl = document.createElement('p');
  var commentEl = document.createElement('p');

  //Setting attributes
  figureEl.setAttribute('class', 'list-container');
  figCapEl.setAttribute('class', 'list-caption');
  imgEl.setAttribute('class', 'food-pic-list');
  favEl.setAttribute('style', 'float: right');

  //Defining
  imgEl.src = this.src;
  h5El.textContent = this.dishName;
  h6El.textContent = this.restaurant;
  pEl.textContent = this.category;
  commentEl.textContent = this.comment;

  //Appending
  listView.appendChild(figureEl);
  figureEl.appendChild(imgEl);
  figureEl.appendChild(figCapEl);
  figCapEl.appendChild(favEl);
  figCapEl.appendChild(h5El);

  //if Favorited
  if (this.isFavorite === true){
    favEl.setAttribute('class', 'fas fa-heart');
  } else{
    favEl.setAttribute('class', 'far fa-heart');
  }

  figCapEl.appendChild(h6El);
  figCapEl.appendChild(pEl);

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
  figCapEl.appendChild(commentEl);
};

//============Test Entries==================

new BiteLogEntry('burger', 'Burger Joint', 'Pub Food', './assets/burger.jpg' , 5, true, 'Delicious');
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './assets/pasta.png', 3, false, 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', 4, false, 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', 2, false, 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zoodles.jpg', 1, false, 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', 5, true, 'so moist');
new BiteLogEntry('Puppaccino', 'Sbux', 'Coffee', './assets/puppuccino2.jpg', 5, true, 'Dog park fuel');

//==============Event handlers================
var changeViewHandler = function(event){
  if (event.target.id === 'grid-icon'){
    listIcon.removeAttribute('class');
    gridIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderGallery();
    console.log('grid clicked');
  } else if (event.target.id === 'list-icon'){
    gridIcon.removeAttribute('class');
    listIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderList();
    console.log('list clicked');
  }
};

//=================Function Calls===============
var refreshSection = function(){
  while(galleryView.firstChild){
    galleryView.removeChild(galleryView.firstChild);
    console.log('removing');
  }
  while(listView.firstChild){
    listView.removeChild(listView.firstChild);
  }
};
var renderGallery = function () {
  console.log('render gallery');
  for (var i in biteLogEntryArray) {
    biteLogEntryArray[i].renderSingleGalleryItem();
  }
};

var renderList = function(){
  for (var i in biteLogEntryArray) {
    biteLogEntryArray[i].renderSingleListItem();
  }
};


var renderGalleryHeader = function(){
  var userPhotoHeader = document.getElementById('user-profilepic');
  var userNameHeader = document.getElementById('user-name');
  userNameHeader.textContent = currentUser.userName;
  userPhotoHeader.src = currentUser.userImage;
};


renderGallery();
renderGalleryHeader();

viewIconSection.addEventListener('click', changeViewHandler);
changeViewHandler;
