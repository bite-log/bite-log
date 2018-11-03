'use strict';

//This script is used ONLY on gallery.html and add.html pages
//If there is not a currentuser logged in, then it will redirect to the index.html and prompt to login/create an account.

var loginRedirect = function(){
  if (!currentUser){
    window.location.replace('index.html');
    redirectLogin = true;
    localStorage.setItem('login-redirect', JSON.stringify(redirectLogin));
  }
};

loginRedirect();

