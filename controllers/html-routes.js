
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
var path = require("path");
var passport = require("passport");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });


  // app.post('/login',
  // passport.authenticate('local'),
  // function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // res.redirect('/users/' + req.user.username);
    // console.log("time works");
  // });

  // app.post('/login',
  // passport.authenticate('local', { successRedirect: '/',
                                  //  failureRedirect: '/login' }));
};