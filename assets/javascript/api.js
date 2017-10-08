$(document).ready(function() {
    $("#done").click(function() {
    
         var password = $('#psw').val().trim();
         var password_confirmation = $('#psw-repeat').val().trim();
         var username = $("#username").val().trim();

         if (password != password_confirmation) {
             alert('Password confirmation does not match.');
             return false;
         }
     
         var data = {
             username: username,
             password: password
         };
     
         $.ajax({
             type: 'POST',
             url: '/api/register',
             data: data,
             success: function(data, textStatus) {
                 console.log(data.redirect);
                 if (data.redirect) {
                     window.location.href = data.redirect;
                 }
             }
         });
     });

     $("#done2").click(function() {
        console.log("signing in");
        var password2 = $('#psw2').val().trim();
        var username2 = $("#username2").val().trim();

        var data2 = {
            username2: username2,
            password2: password2
        };

        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: data2,
            success: function(data, textStatus) {
                console.log(data.redirect);
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            }

        });
    });
});
