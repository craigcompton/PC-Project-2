// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads register.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  });

  
  // add route loads the add.html page, where users can enter new books to the db
  app.get("/present", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/present.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/future", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/future.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get("/previous", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/previous.html"));
  });

  app.get("/addNew", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/addNew.html"));
  });

};



// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Reminder.findAll({}).then(function(dbReminders) {
//       res.render("index", {
//         msg: "Welcome!",
//         Reminders: dbReminders
//       });
//     });
//   });

//   // Load Reminder page and pass in an Reminder by id
//   app.get("/Reminder/:id", function(req, res) {
//     db.Reminder.findOne({ where: { id: req.params.id } }).then(function(dbReminders) {
//       res.render("Reminder", {
//         Reminder: dbReminders
//       });
//     });
//   });

  // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
