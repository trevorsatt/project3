//javascript//
 "use strict";

    $(document).ready(function() {

         event.preventDefault();


          var type = $(this).attr("data-type");
          var city = $("city").val();

            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "units=imperial" + "&APPID=a6cbd508033d26ef1a37c676121a8ce5";
          
            $.ajax({
              url: queryURL,
              method: "GET",
              dataType:"json",
              success: function(data){
                console.log(data);
              }
            })
            $("#weather").text("city");

         
        });

