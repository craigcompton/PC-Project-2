
var db = require("../models");

module.exports = function(app) {
  // Get all reminders
  app.get("/api/reminders", function(req, res) {
    db.Example.findAll({}).then(function(dbreminders) {
      res.json(dbreminders);
    });
  });

  // Create a new example
  app.post("/api/reminders", function(req, res) {
    db.Example.create(req.body).then(function(dbreminders) {
      res.json(dbreminders);
    });
  });

    // Update an example
    app.post("/api/reminders", function(req, res) {
      db.Example.update(req.body).then(function(dbreminders) {
        res.json(dbreminders);
      });
    });

  // Delete an example by id
  app.delete("/api/reminders/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbreminders) {
      res.json(dbreminders);
    });
  });
};
