'use strict';

var loginRedirect = function(){
  if (!currentUser){
    window.location.replace('index.html');
    redirectLogin = true;
    localStorage.setItem('login-redirect', JSON.stringify(redirectLogin));
  }
};

loginRedirect();

