var db = require("../models"); //Hi Craig, this page is uputo date as of now, we just have to work on getting reminders

//testing...................................................... 

//required moment.js
var moment = require("moment");
moment().format();
// grtting todays date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 
if(mm<10) {
    mm = '0'+mm
} 
today = yyyy + '/' + mm + '/' + dd;

//this normalizes date , not much helpful, may be helpful, did not use on this code, but we might need it
// var normalizedDate = new Date(Date.now()).toISOString();

module.exports = function(app) {

//   // Get all reminders
app.get("/api/add", function(req, res) {
  console.log("TODAY", today);
  db.Reminder.findAll({
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      [date, 'DESC']  
    ]
  }).then(function(dbReminder) {
    res.json(dbReminder);
  });
});

//   // Get all present reminders
  app.get("/api/present", function(req, res) {
    console.log("TODAY", today);
    db.Reminder.findAll({
      where: {
        date: today
      }
    }).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // get all previous reminders
  app.get("/api/previous", function(req, res) {
    db.Reminder.findAll({
      where: {
        date: {
          $lt: today
        }   
      }
    }).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // get all future reminders
  app.get("/api/future", function(req, res) {
    db.Reminder.findAll({
      where: {
        date: {
          $gt: today
        }   
      }
    }).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // add new reminders
  app.post("/api/addNew", function(req, res) {
    console.log("Reminder Data:");
    console.log(req.body);
    db.Reminder.create({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      // alarmType: req.body.alarmType
    }).then(function(results) {
      res.json(results);
    });
  });

    // Delete a reminder
    app.delete("/api/reminder/:id", function(req, res) {
      console.log("Reminder ID:");
      console.log(req.params.id);
      db.Reminder.destroy({
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.end();
      });
    });
  };

