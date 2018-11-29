var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminders) {
      res.render("index", {
        msg: "Welcome!",
        Reminders: dbReminders
      });
    });
  });

  // Load Reminder page and pass in an Reminder by id
  app.get("/Reminder/:id", function(req, res) {
    db.Reminder.findOne({ where: { id: req.params.id } }).then(function(dbReminders) {
      res.render("Reminder", {
        Reminder: dbReminders
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
