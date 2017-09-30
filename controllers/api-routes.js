// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


    // // POST route for saving a new post
    app.post("/api/register", function(req, res) {
        db.users.create(req.body).then(function() {
            res.send({redirect: '/wanderlist'});
        });
    });


};