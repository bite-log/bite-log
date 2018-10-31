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

  biteLogEntryArray.unshift(this);
  allRestaurantArray.push(this.restaurant);
};

var renderSingleGalleryItem = function (biteArray){
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
  for(var i = 0; i < biteArray.rating; i++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'fas fa-star');
    overlay.appendChild(starEl);
  }
  for (var x = 0; x < (5 - biteArray.rating); x++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'far fa-star');
    overlay.appendChild(starEl);
  }
};

var renderSingleListItem = function(biteArray){
  //Defining HTML elements
  var figureEl = document.createElement('figure');
  var figCapEl = document.createElement('figcaption');
  var imgEl = document.createElement('img');
  var favEl = document.createElement('i');
  var h5El = document.createElement('h5');
  var h6El = document.createElement('h6');
  var commentEl = document.createElement('p');
  var pEl = document.createElement('p');

  //Setting attributes
  figureEl.setAttribute('class', 'list-container');
  figCapEl.setAttribute('class', 'list-caption');
  imgEl.setAttribute('class', 'food-pic-list');
  favEl.setAttribute('class', 'fav-heart');
  h5El.setAttribute('class','menu-item');
  h6El.setAttribute('class', 'restaurant');
  commentEl.setAttribute('class', 'comment');
  pEl.setAttribute('class', 'category');

  //Defining
  imgEl.src = biteArray.src;
  h5El.textContent = biteArray.dishName;
  h6El.textContent = biteArray.restaurant;
  commentEl.textContent = biteArray.comment;
  pEl.textContent = biteArray.category;

  //Appending
  listView.appendChild(figureEl);
  figureEl.appendChild(imgEl);
  figureEl.appendChild(figCapEl);
  figCapEl.appendChild(favEl);
  figCapEl.appendChild(h5El);

  //if Favorited
  if (biteArray.isFavorite === true){
    favEl.setAttribute('class', 'fas fa-heart');
  } else{
    favEl.setAttribute('class', 'far fa-heart');
  }

  figCapEl.appendChild(h6El);
  figCapEl.appendChild(pEl);

  //Number of stars
  for(var i = 0; i < biteArray.rating; i++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'fas fa-star');
    figCapEl.appendChild(starEl);
  }
  for (var x = 0; x < (5 - biteArray.rating); x++){
    var starEl = document.createElement('i');
    starEl.setAttribute('class', 'far fa-star');
    figCapEl.appendChild(starEl);
  }
  figCapEl.appendChild(commentEl);
};

//============Test Entries==================
new BiteLogEntry('pasta', 'Pasta Joint', 'Italian', './assets/pasta.png', 3, false, 'fantastic!');
new BiteLogEntry('Pot Roast', 'Pot Roast City', 'Comfort Food', './assets/potroast.jpg', 4, false, 'Magical!');
new BiteLogEntry('Chili', 'Chiliville', 'Comfort Food', './assets/chili.jpg', 2, false, 'good, not great');
new BiteLogEntry('zoodles', 'Oodles O Noodles', 'Vegetarian', './assets/zoodles.jpg', 1, false, 'watery');
new BiteLogEntry('cake', 'Just Cakes', 'Dessert', './assets/cake.jpg', 5, true, 'so moist');

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

//==============Event handlers================
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
var restaurantCounterFunction = function(){
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
};

localStorageCheck();
if (galleryView || listView){
  renderGallery(biteLogEntryArray);
  renderGalleryHeader();
  viewIconSection.addEventListener('click', changeViewHandler);
  changeViewHandler;
} else{
  newFoodLogForm.addEventListener('submit', foodLogHandler);
}
