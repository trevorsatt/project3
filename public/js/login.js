window.onload = function() {
    
    gapi.load('auth2', function () {
      gapi.auth2.init();
    });
    }
    
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;  
      console.log(id_token);
      
      $.post( "/authenticate", {token: id_token}, function( data ) {
      //  alert(data);
      //you will want to redirect when authentication is complete
      });

    };
    
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }