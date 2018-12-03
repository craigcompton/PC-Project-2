var db = require("../models"); //Hi Craig, this page is uputo date as of now, we just have to work on getting reminders

module.exports = function(app) {
//   // Get all reminders
  app.get("/api/present", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  app.get("/api/previous", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  app.get("/api/future", function(req, res) {
    db.Reminder.findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // Get all previous reminders
  // app.get("/api/previous", function(req, res) {
  //   db.Reminder.findAll({
  //     whre
  //   }).then(function(dbReminder) {
  //     res.json(dbReminder);
  //   });
  // });

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
}
//   //Get all future reminders

//   // Get all present reminders

//   // Create a new reminder AND edit a reminder. 
//   app.post("/api/reminders", function(req, res) {
//     db.Reminder.create(req.body).then(function(dbReminder) {
//       res.json(dbReminder);
//     });
//   });

//   // Delete a reminder by id
//   app.delete("/api/reminders/:id", function(req, res) {
//     db.Reminder.destroy({ where: { id: req.params.id } }).then(function(dbReminder) {
//       res.json(dbReminder);
//     });
//   });
// };


// --------------------------------------------------------------

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Reminder = require("../models/reminder.js");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // Get all books
//   app.get("/api/all", function(req, res) {
//     Book.findAll({}).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get a specific book
//   app.get("/api/:book", function(req, res) {
//     Book.findAll({
//       where: {
//         title: req.params.book
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all books of a specific genre
//   app.get("/api/genre/:genre", function(req, res) {
//     Book.findAll({
//       where: {
//         genre: req.params.genre
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all books from a specific author
//   app.get("/api/author/:author", function(req, res) {
//     Book.findAll({
//       where: {
//         author: req.params.author
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "long" books (books 150 pages or more)
//   app.get("/api/books/long", function(req, res) {
//     Book.findAll({
//       where: {
//         pages: {
//           $gte: 150
//         }
//       },
//       order: [["pages", "DESC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "short" books (books 150 pages or less)
//   app.get("/api/books/short", function(req, res) {
//     Book.findAll({
//       where: {
//         pages: {
//           $lte: 150
//         }
//       },
//       order: [["pages", "ASC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Add a reminder
//   app.post("/api/new", function(req, res) {
//     console.log("Reminder Data:");
//     console.log(req.body);
//     Reminder.create({
//       title: req.body.title,
//       date: req.body.date,
//       time: req.body.time,
//       // alarmType: req.body.alarmType
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Delete a book
//   app.delete("/api/book/:id", function(req, res) {
//     console.log("Book ID:");
//     console.log(req.params.id);
//     Book.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function() {
//       res.end();
//     });
//   });
// };

