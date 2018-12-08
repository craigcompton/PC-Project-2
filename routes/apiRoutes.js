var db = require("../models");

//required moment.js
var moment = require("moment");

var today = moment().format("YYYY-MM-DD");

module.exports = function (app) {

  //   // Get all reminders on the addNew page
  app.get("/api/add", function (req, res) {
    console.log("TODAY", today);
    db.Reminder.findAll({
    }).then(function (dbReminder) {
      res.json(dbReminder);
    });
  });

  //   // Get all of today's reminders for the 'present' page 
  app.get("/api/present", function (req, res) {
    console.log("TODAY", today);
    db.Reminder.findAll({
      where: {
        date: today
      }
    }).then(function (dbReminder) {
      res.json(dbReminder);
    });
  });

  // get all of the past  reminders for the 'previous' page
  app.get("/api/previous", function (req, res) {
    db.Reminder.findAll({
      where: {
        date: {
          $lt: today
        }
      }
    }).then(function (dbReminder) {
      res.json(dbReminder);
    });
  });

  // get all future reminders for the 'future' page
  app.get("/api/future", function (req, res) {
    db.Reminder.findAll({
      where: {
        date: {
          $gt: today
        }
      }
    }).then(function (dbReminder) {
      res.json(dbReminder);
    });
  });

  // add new reminders on the 'addNew' page
  app.post("/api/addNew", function (req, res) {
    console.log("Reminder Data:");
    console.log(req.body);
    db.Reminder.create({
      title: req.body.title,
      date: req.body.date,
      time: req.body.time,
      // alarmType: req.body.alarmType
    }).then(function (results) {
      res.json(results);
    });
  });

  // Delete a reminder
  app.delete("/api/reminder/:id", function (req, res) {
    console.log("Reminder ID:");
    console.log(req.params.id);
    db.Reminder.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });


  // Update a reminder
  // app.put("/api/reminder/:id", function (req, res) {
  //   console.log("Reminder ID:");
  //   console.log(req.params.id);
  //   db.Reminder.update({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function () {
  //     res.end();
  //   });
  // });

};

