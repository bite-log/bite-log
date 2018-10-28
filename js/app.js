'use-strict';

//===========Global Variables==============

var categoryArray = ['Chinese', 'Japanese', 'Vietnamese', 'Korean', 'Thai', 'Greek', 'Mexican', 'Mediterranean', 'Cocktail Bars', 'Food Truck', 'Italian', 'French', 'Fast Food', 'Fast Casual', 'Fine Dining', 'Pub', 'Coffee & Tea', 'Dessert', 'Barbecue', 'Buffet', 'Seafood', 'Deli', 'American', 'Pizza', 'Vegan', 'Tapas/Small Plates', 'Breakfast & Brunch'];
var restaurantArray = [];
var biteLogEntryArray = [];
var userProfileArray = [];




var loggedIn = false;
var currentUser;

var galleryView = document.getElementById('gallery-view');
var listView = document.getElementById('list-view');
var newUserForm = document.getElementById('newuser-form');
var loginForm = document.getElementById('login-form');
var navigation = document.getElementById('nav');
var logoutButton = document.getElementById('logout-button');

//==========Constructor Functions==========

var UserProfile = function (username, spice, src) {
  this.userName = username;
  this.spice = spice;
  this.userImage = src;

  userProfileArray.push(this);
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
  localStorage.setItem('users', JSON.stringify(userProfileArray));
};

var loginHandler = function(event){
  event.preventDefault();

  var name = event.target.username.value;
  var spice = event.target.favspice.value;

  for (var i in userProfileArray){
    console.log(name + spice);
    if (name === userProfileArray[i].userName && spice === userProfileArray[i].spice){
      loggedIn = true;
      currentUser = userProfileArray[i];
      localStorage.setItem('current-user', JSON.stringify(currentUser));
    } else{
      var login = document.getElementById('login-form');
      var textEl = document.createElement('span');
      textEl.setAttribute('class', 'login-required')
      textEl.textContent = 'User does not exist. Please create profile to continue.';
      login.insertBefore(textEl, login.children[1]);
    }
  }
  userIsLoggedIn();
};

var userIsLoggedIn = function(){
  loggedIn = true;
  if (loggedIn === true || currentUser){
    var loginField = document.getElementById('login-field');
    while (loginField.firstChild){
      loginField.removeChild(loginField.firstChild);
    }
    var h5El = document.createElement('h5');
    h5El.textContent = 'Welcome back ' + currentUser.userName + '!';
    loginField.appendChild(h5El);
  }
};

var loginRedirect = function(event){
  if (event.target.id === 'gallery'){
    window.location.href = 'gallery.html';
  } else if (event.target.id === 'add'){
    window.location.href = 'add.html';
  } else if (loggedIn === false){
    var login = document.getElementById('login-form');
    var textEl = document.createElement('span');
    textEl.setAttribute('class', 'login-required');
    textEl.textContent = 'You must be logged in to continue.';
    login.insertBefore(textEl, login.children[1]);
  } 
};

var logout = function(event){
  localStorage.removeItem('current-user');
  loggedIn = false;
  console.log('signout clicked');
  window.location.href = 'index.html';
};


//===========Function Calls================

//Local storage
var grabUser = function(){
  if (localStorage.getItem('users')){
    console.log('true, local storage exists');
    userProfileArray = JSON.parse(localStorage.getItem('users'));
    currentUser = JSON.parse(localStorage.getItem('current-user'));
  }
};

grabUser();
navigation.addEventListener('click', loginRedirect);
logoutButton.addEventListener('click', logout);

if (newUserForm){
  newUserForm.addEventListener('submit', createNewUserHandler);
} else if (loginForm){
  loginForm.addEventListener('submit', loginHandler);
  if (loggedIn){
    userIsLoggedIn();
  }
}