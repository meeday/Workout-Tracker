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

  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({
        type: "workout"
      })
      res.json(response);
    } catch (error) {
      console.log(`workout creation failed: ${error}`);  
    }
  })

 







}