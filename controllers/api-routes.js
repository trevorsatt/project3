// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models

var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Routes
// =============================================================
module.exports = function(app) {


    // // POST route for saving a new post---THIS WAITS FOR DATA FROM THE FRONT END
    app.post("/api/register", function(req, res) {
        
        db.users.create(req.body).then(function() {
            // passport code to log them in
            // we need to put if login already exist throw error 10/07/17

            res.send({redirect: '/'});
        });
    });

    // passport.use(new LocalStrategy(
    //     function(username, password, done) {
    //         users.findOne({ username: username }, function (err, user) {
    //             if (err) { return done(err); }
    //             if (!user) { return done(null, false); }
    //             if (!user.verifyPassword(password)) { return done(null, false); }
    //             return done(null, user);
    //         });
    //     }
    // ));

//     app.post("/api/login", function(req,res){
//         var username = req.body.username2;
//         var password = req.body.password2;
//         console.log(username);
//         console.log(password);



//         // res.send({redirect: '/'});
//     });
        // app.post('/api/login',
            

        //     passport.use(new LocalStrategy(
        //         function(username, password, done) {
        //           User.findOne({ username: username }, function(err, user) {
        //             if (err) { return done(err); }
        //             if (!user) {
        //               return done(null, false, { message: 'Incorrect username.' });
        //             }
        //             if (!user.validPassword(password)) {
        //               return done(null, false, { message: 'Incorrect password.' });
        //             }
        //             return done(null, user);
        //           });
        //         }
        //     ));



        // );




}