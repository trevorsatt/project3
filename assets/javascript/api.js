$(document).ready(function() {
    $("#done").click(function(e) {
        e.preventDefault();
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

     $("#done2").click(function(e) {
         e.preventDefault();

        var password2 = $('#psw2').val().trim();
        var username2 = $("#username2").val().trim();

        var data2 = {
            username: username2,
            password: password2
        };
        console.log(data2);
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: data2,
            success: function(data, textStatus) {
                console.log(data);
                console.log(5);
                localStorage.setItem("username", data.req.username);
                
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            },
            error: function(data) {
                $('#login-error').html("Incorrect login.");
            }

        });
    });
});
