var db = require("../models"); //Hi Craig, this page is uputo date as of now, we just have to work on getting reminders

module.exports = function(app) {
  // Get all reminders
  app.get("/api/reminders", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // Get all previous reminders

  //Get all future reminders

  // Get all present reminders

  // Create a new reminder AND edit a reminder. 
  app.post("/api/reminders", function(req, res) {
    db.Reminder.create(req.body).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // Delete a reminder by id
  app.delete("/api/reminders/:id", function(req, res) {
    db.Reminder.destroy({ where: { id: req.params.id } }).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });
};

