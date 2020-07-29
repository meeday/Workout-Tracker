// require in the model object
const db = require("../models/workout-model");

// get, post, put request routes setup based on the api.js file
module.exports = (app) => {
  // get request to fetch the last workout
  app.get("/api/workouts", async (req, res) => {
    try {
      const result = await db.Workout.find({});
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });
  // post request to create new workout and save to database
  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({
        type: "workout",
      });
      res.json(response);
    } catch (error) {
      console.log(`workout creation failed: ${error}`);
    }
  });

  // put request to update workout exercises with a specific id
  app.put("/api/workouts/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await db.Workout.updateOne(
        { _id: id },
        { $push: { exercises: req.body } }
      );
      res.json(updated);
    } catch (error) {
      res.json(error);
    }
  });
  // request to workouts in range
  app.get("/api/workouts/range", async (req, res) => {
    try {
      const result = await db.Workout.find({});
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  });
};
