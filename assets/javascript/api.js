$("#submit").click(function(e) {
    e.preventDefault();

    var password = $('#password').val().trim();
    var password_confirmation = $('#password_confirmation').val().trim();
    var email = $("#email").val().trim();

    if (password != password_confirmation) {
        alert('Password confirmation does not match.');
        return false;
    }

    var data = {
        email: email,
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