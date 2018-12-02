var db = require("../models"); //Hi Craig, this page is uputo date as of now, we just have to work on getting reminders
var moment = require('moment');
moment().format();

var day = moment();
module.exports = function(app) {
  // Get all reminders
  app.get("/api/reminders", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // Get all previous reminders
  app.get("/api/previous", function(req, res) {
    //write a logic for getting all the days from past.
    
    db.Reminder.findAll({
      where: {
        date: < day //show all previoue reminders
      },
      orderBy:'`group` DESC'
    }).then(function(results) {
      res.json(results);
    });
  });

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

