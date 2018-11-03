'use-strict';

//===========Global Variables==============
var allRestaurantArray = [];
var biteLogEntryArray = [];
var userProfileArray = [];
var punArray = ['we\’re kind of a big dill', 'you look radishing', 'we\’re made pho each other', 'every day I’m trufflin\’', 'so we meat again', 'you guac my world', 'good chives only', 'penne for your thoughts?', 'lettuce turnip the beet', 'don\’t settle for being mediokra', 'keep calm and curry on', 'do you wanna taco \‘bout it?', 'walk this whey', 'you wanna pizza me?', 'jello from the other side', 'i donut know what i\’d do without you', 'olive you from my head tomatoes', 'two birds, one scone', 'it takes two to mango', 'absolutely spec-taco-lar!', 'you\'re flantastic!', 'you make miso happy', 'the pearsuit of happiness', 'don\'t go bacon my heart', 'another one bites the crust', 'it was mint to be!', 'party like it\'s sherbertday', 'love you a latte', 'hugs & quiches', 'hakuna frittata', 'pasta la vista, baby!'];
var categoryArray = ['Chinese', 'Japanese', 'Vietnamese', 'Korean', 'Thai', 'Greek', 'Mexican', 'Mediterranean', 'Vegetarian', 'Comfort Food', 'Cocktail Bars', 'Food Truck', 'Italian', 'French', 'Fast Food', 'Fast Casual', 'Fine Dining', 'Pub', 'Coffee & Tea', 'Dessert', 'Barbecue', 'Buffet', 'Seafood', 'Deli', 'American', 'Pizza', 'Vegan', 'Tapas/Small Plates', 'Breakfast & Brunch'];

var currentUser, redirectLogin;

var galleryView = document.getElementById('gallery-view');
var listView = document.getElementById('list-view');
var loginForm = document.getElementById('login-form');
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

  var newUser = new UserProfile(name, spice, src);
  currentUser = newUser;
  localStorage.setItem('users', JSON.stringify(userProfileArray));
  localStorage.setItem('current-user', JSON.stringify(currentUser));
  window.location.href = 'index.html';
};

var loginHandler = function(event){ 
  event.preventDefault();

  var name = event.target.username.value;
  var spice = event.target.favspice.value;

  console.log(name + spice);

  //Checks if user input matches anything in local storage; if not, then it gives error message.
  if (localStorage.getItem('users')){ 
    for (var i in userProfileArray){
      if (name === userProfileArray[i].userName && spice === userProfileArray[i].spice){
        currentUser = userProfileArray[i];
        localStorage.setItem('current-user', JSON.stringify(currentUser));
        userIsLoggedIn();
        location.reload();
      } else{
        userDoesNotExist();
      }
    }
  } else{
    userDoesNotExist();
  }
};

//=========Login stuff==============
var userDoesNotExist = function(){
  var errorMsg = document.getElementById('error-message');
  errorMsg.setAttribute('class', 'login-required')
  errorMsg.textContent = 'User does not exist and/or incorrect information entered. Please try again or create profile to continue.';
};

var userIsLoggedIn = function(){
  //creates signout button if signed in
  var aEl = document.createElement('a');
  var iEl = document.createElement('i');
  var spanEl = document.createElement('span');
  aEl.setAttribute('id', 'logout');
  aEl.setAttribute('onclick', 'logout');
  iEl.setAttribute('class', 'fas fa-sign-out-alt fa-lg');
  spanEl.textContent = ' Sign Out';
  logoutButton.appendChild(aEl);
  aEl.appendChild(iEl);
  aEl.appendChild(spanEl);
};

var logout = function(event){
  localStorage.removeItem('current-user');
  console.log('signout clicked');
  window.location.href = 'index.html';
};
  
//==========Creates category drop-down based on array===============
var categoryCreator = function(){
  categoryArray.sort();
  var dropDownList = document.getElementById('food-category');
  dropDownList.removeAttribute('class', 'hidden');
  for (var i in categoryArray){
    var optionEl = document.createElement('option');
    optionEl.setAttribute('id', categoryArray[i]);
    optionEl.textContent = categoryArray[i];
    dropDownList.appendChild(optionEl);
  }
};

//==========Pun generator=================
var randomPun = function(){
  var punElement = document.getElementById('pun');
  punElement.textContent = punArray[Math.floor(Math.random() * punArray.length)];
};

//===========Local Storage================
var grabUser = function(){
  if (localStorage.getItem('users')){
    console.log('true, local storage exists');
    userProfileArray = JSON.parse(localStorage.getItem('users'));
    if (localStorage.getItem('current-user')){
      currentUser = JSON.parse(localStorage.getItem('current-user'));
      logoutButton.addEventListener('click', logout);
    }  
  }
  if(!currentUser){
    redirectLogin = JSON.parse(localStorage.getItem('login-redirect'));
    //works with login.js to redirect users if they try to go to gallery.html/add.html without being logged in
    if (redirectLogin === true){ 
      var errorMsg = document.getElementById('error-message');
      errorMsg.setAttribute('class', 'login-required');
      errorMsg.textContent = 'You must be logged in to continue.';
      redirectLogin = false;
      localStorage.setItem('login-redirect', JSON.stringify(redirectLogin));
    }
  }
};

var initialize = function(){
  //Checks if there is a user logged in, then adds event listeners based on what form is currently onscreen.
  grabUser();

  if (document.getElementById('newuser-form')){
    var newUserForm = document.getElementById('newuser-form');
    newUserForm.addEventListener('submit', createNewUserHandler);
  } else if (currentUser){
    //If user is logged in, then a 'welcome back' prompt will appear in lieu of the login form.
    userIsLoggedIn();
    if (loginForm){
      var loginField = document.getElementById('login-field');
      while (loginField.firstChild){
        loginField.removeChild(loginField.firstChild);
      }
      var h5El = document.createElement('h5');
      h5El.textContent = 'Welcome back ' + currentUser.userName + '!';
      loginField.appendChild(h5El);
    }
  }
  if (!galleryView || !listView){
    randomPun();
  }
  if (loginForm){
    loginForm.addEventListener('submit', loginHandler);
  } else if (document.getElementById('add-log')){
    categoryCreator();
  }
};

//===========Function Calls================
initialize();
