//javascript//
 "use strict";
$(document).ready(function() {

        var API_KEY = "a6cbd508033d26ef1a37c676121a8ce5";
        var cel = false;
        var wd;

        function displayTemp(fTemp, c){
        if(c) return Math.round((fTemp - 32) * (5/9) + "C");
        return Math.round(fTemp) + "F";
        }

        var loc;

        $.getJSON('https://ipinfo.io', function(data){
                // console.log(data)
                loc = data.loc.split(",");
        //       })

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY, function(apiData) {
               
        wd = apiData;

        console.log("got the data," , wd);

        var currentLocation = wd.name;
        var currentWeather = wd.weather[0].description;
        var currentDegree = displayTemp (wd.main.temp, cel);
        var icon = wd.weather[0].icon;

        $("#weather").html(currentLocation + "<br>" + currentWeather);

        var iconSrc = "https://openweathermap.org/img/w/" + icon + ".png";
        $("#weatherPic").prepend("<img src=" + iconSrc + '>');
        $("#currentDegree").html(currentDegree);

        })
        });

        var quotes = [
                "Set Goals then KICK EM in the face!", 
                "It's a slow process, dont make it slower by quitting",
                "Eat Clean, Train Dirty",
                "Fitness: A lifestyle with no finish line",
                "Every time you eat or drink, you are either feeding disease or fighting it.",
                "70% of people that start a fitness plan quit. EXCEPT YOU....not this time!",
                "You can feel sore tomorrow or you can feel sorry tomorrow...You Choose.",
                "I already know what giving up feels like. I want to see what happens if I don't."
        ];

        // FIGURE OUT HOW TO GENERATE ONLOAD OF BROWSER INSTEAD OF ON CLICK
        function newQuote() {          
                var randomNumber = Math.floor(Math.random() * (quotes.length));
                document.getElementById("quotes").innerHTML = quotes[randomNumber];
        };

        newQuote();
        setInterval(function() {
        newQuote();
        }, 5000);

});






//         var long;
//         var lat;
//         var api ="https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "units=imperial" + "&APPID=a6cbd508033d26ef1a37c676121a8ce5";
        
//         if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(function(position) {
//                         long = position.coords.longitude;
//                         lat = position.coords.latitude;
                        
                        
//                         $("#data").html("latitude: " + lat + "<br>longitude: " + long);
                        
                        
//                         $.getJSON(api, function(data) {
//                                 console.log(data.coord.lon);
//                                 console.log(data);
//                         });
//                         // navigator.geolocation.getCurrentPosition(getCurrentLocation);
//           });
//         }
//       });








       

         


