const db = require("../models/workout-model");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
  });

  