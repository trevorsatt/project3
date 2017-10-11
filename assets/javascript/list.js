$(document).ready(function($) {
    var storedValue = localStorage.getItem("server");
    // use this function to clear your local storage
    // localStorage.clear();
    setInterval(function(){ 
        localStorage.clear();
    }, 600000);

    console.log(localStorage);

    for (var i = 0, len = localStorage.length; i < len; ++i) {
      console.log(localStorage.getItem(localStorage.key(i)));
      var newTask = localStorage.getItem(localStorage.key(i));
      var newLi = $('<li>' + "\u2022 " + newTask + '</li>');
      newLi.on('click', function() {
          var itemToRemove = this.innerHTML.replace("\u2022", "").trim();
          console.log(itemToRemove);
          localStorage.removeItem(itemToRemove);
          $(this).remove(); // Attach the event handler *before* adding the element
      });
      $('ul').prepend(newLi); // To put the new task at the top of the list
    }

    $('form').submit(function() {
        if ($('.input').val() !== '') {
            localStorage.setItem($('.input').val(), $('.input').val());
            var newTask = $('.input').val();
            var newLi = $('<li>' + "\u2022 " + newTask + '</li>');
            newLi.on('click', function() {
                var itemToRemove = this.innerHTML.replace("\u2022", "").trim();
                console.log(itemToRemove);
                localStorage.removeItem(itemToRemove);
                $(this).remove(); // Attach the event handler *before* adding the element
            });
            $('ul').prepend(newLi); // To put the new task at the top of the list
            $('.input').val('');
            return false; // So the change persists
        }
    });
    $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)
});


// Photo randomizer
$(document).ready(function(){
    var images = ['pics/background0.jpeg',
                'pics/background1.jpeg',
                'pics/background2.jpeg', 
                'pics/background3.jpeg',
                'pics/background4.jpeg',
                'pics/background5.jpeg', 
                'pics/background6.jpeg',
                'pics/background7.jpeg',
                'pics/background8.jpg',
                'pics/background9.jpeg',
                'pics/background10.jpeg'];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('body').css({'background':bgImg, 'background-size':'cover', });
});

