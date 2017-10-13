// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models

var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
// Routes
// =============================================================
module.exports = function(app) {

    app.post('/api/login', passport.authenticate('local-signin'), function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
           
            res.json({redirect: '/'});
    });

    app.post('/api/register', passport.authenticate('local-signup'), function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.json({redirect: '/'});
    });





}