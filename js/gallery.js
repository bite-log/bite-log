'use strict';
// =========Global Variables for Gallery Page ====================
var viewIconSection = document.getElementById('view-icons');
var listIcon = document.getElementById('list-icon');
var gridIcon = document.getElementById('grid-icon');
var newFoodLogForm = document.getElementById('add-log-form');

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

  biteLogEntryArray.unshift(this); //pushes to beginning of array
  allRestaurantArray.push(this.restaurant);
};

//================Render Functions==========================
var renderSingleGalleryItem = function (biteArray){
  //Define HTML elements
  var gridItemEl = document.createElement('section');
  var imgEl = document.createElement('img');
  var overlay = document.createElement('div');
  var h2El = document.createElement('h2');
  var h5El = document.createElement('h5');

  //Set attributes
  overlay.setAttribute('class', 'overlay');

  //Define content
  imgEl.src = biteArray.src;
  h2El.textContent = biteArray.dishName;
  h5El.textContent = biteArray.restaurant;

  //Appending
  galleryView.appendChild(gridItemEl);
  gridItemEl.appendChild(overlay);
  gridItemEl.appendChild(imgEl);
  overlay.appendChild(h2El);
  overlay.appendChild(h5El);

  //Number of stars
  renderStars(biteArray, overlay);
};

var renderSingleListItem = function(biteArray){
  //Defining HTML elements
  var figureEl = document.createElement('figure');
  var figCapEl = document.createElement('figcaption');
  var imgEl = document.createElement('img');
  var favEl = document.createElement('i');
  var pEl = document.createElement('p');
  var h5El = document.createElement('h5');
  var h6El = document.createElement('h6');
  var commentEl = document.createElement('p');

  //Setting attributes
  imgEl.setAttribute('class', 'food-pic-list');
  favEl.setAttribute('class', 'fav-heart');
  pEl.setAttribute('class', 'category');

  //Defining
  imgEl.src = biteArray.src;
  h5El.textContent = biteArray.dishName;
  h6El.textContent = biteArray.restaurant;
  commentEl.textContent = biteArray.comment;
  pEl.textContent = biteArray.category;

  //if Favorited
  if (biteArray.isFavorite){
    favEl.setAttribute('class', 'fas fa-heart');
  } else{
    favEl.setAttribute('class', 'far fa-heart');
  }
  //Appending
  listView.appendChild(figureEl);
  figureEl.appendChild(imgEl);
  figureEl.appendChild(figCapEl);
  figCapEl.appendChild(favEl);
  figCapEl.appendChild(pEl);
  figCapEl.appendChild(h5El);
  figCapEl.appendChild(h6El);

  renderStars(biteArray, figCapEl);
  figCapEl.appendChild(commentEl);
};

//Render Number of stars
var renderStars = function(biteArray, theContainer){
  for(var i = 0; i < biteArray.rating; i++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'fas fa-star');
    theContainer.appendChild(starEl);
  }
  for (var x = 0; x < (5 - biteArray.rating); x++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'far fa-star');
    theContainer.appendChild(starEl);
  }
};

//============Test Entries==================
new BiteLogEntry('Delicioso Noodz', 'Pasta Joint', 'Italian', './assets/pasta.jpg', 3, true, 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', 4, true, 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', 2, false, 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zucchininoodles.jpg', 1, false, 'watery');
new BiteLogEntry('Cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', 5, true, 'so moist');
new BiteLogEntry('Tiramisu', 'Just Cakes', 'Dessert', './assets/tiramisu.jpg', 5, false, 'flavor combo on point!');

//==============Event handlers================

//Display section is cleared and re-rendered based on the clicked icon.
var changeViewHandler = function(event){
  if (event.target.id === 'grid-icon'){
    listIcon.removeAttribute('class');
    gridIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderGallery(biteLogEntryArray);
    console.log('grid clicked');
  } else if (event.target.id === 'list-icon'){
    gridIcon.removeAttribute('class');
    listIcon.setAttribute('class', 'icon-selected');
    refreshSection();
    renderList(biteLogEntryArray);
    console.log('list clicked');
  }
};

//Gathers the values from the add.html page and puts into local storage; redirects to gallery.html when submitted.
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
  localStorage.setItem('all-restaurants', JSON.stringify(allRestaurantArray));
  window.location.href = 'gallery.html';
};

//================Local Storage=================
var localStorageCheck = function(){
  if (localStorage.getItem('bite-log')){
    biteLogEntryArray = JSON.parse(localStorage.getItem('bite-log'));
    allRestaurantArray = JSON.parse(localStorage.getItem('all-restaurants'));
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

var renderGallery = function (array) {
  console.log('render gallery');
  for (var i in array) {
    renderSingleGalleryItem(array[i]);
  }
};
var renderList = function(array){
  for (var i in array) {
    renderSingleListItem(array[i]);
  }
};

//==========Counter Functions==================
var restaurantCounterFunction = function(){
  var uniqueRestaurantArray = [];
  for (var i = 0; i < allRestaurantArray.length; i++) {
    if(uniqueRestaurantArray.indexOf(allRestaurantArray[i]) === -1) {
      uniqueRestaurantArray.push(allRestaurantArray[i]);
      restaurantCounter++;
    }
  }
};
var biteCounterFunction = function(){
  bitesCount = 0;
  for (var i = 0; i < biteLogEntryArray.length; i++) {
    bitesCount++;
  }
};

var renderGalleryHeader = function(){
  var userPhotoHeader = document.getElementById('user-profilepic');
  var userNameHeader = document.getElementById('user-name');
  userNameHeader.textContent = currentUser.userName;
  userPhotoHeader.src = currentUser.userImage;

  biteCounterFunction();
  var biteCountEl = document.getElementById('bite-count');
  biteCountEl.textContent = bitesCount;

  restaurantCounterFunction();
  var restaurantCountEl = document.getElementById('restaurant-count');
  restaurantCountEl.textContent = restaurantCounter;

  var h2El = document.getElementById('user');
  h2El.textContent = currentUser.userName + '\'s bite log>>';
};

var initializeGallery = function(){
  localStorageCheck();
  if (galleryView || listView){
    renderGallery(biteLogEntryArray);
    renderGalleryHeader();
    viewIconSection.addEventListener('click', changeViewHandler);
    changeViewHandler;
  } else{
    newFoodLogForm.addEventListener('submit', foodLogHandler);
  }
};
initializeGallery();

