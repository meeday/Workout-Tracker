// require in the model object
const db = require("../models/workout-model");

// get, post, put request routes setup based on the api.js file
module.exports = (app) => {
  // get request to fetch the last workout
  app.get("/api/workouts", (req, res) => {
    db.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
  });
// post request to create new workout and save to database
  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.create({
        type: "workout"
      })
      res.json(response);
    } catch (error) {
      console.log(`workout creation failed: ${error}`);  
    }
  });

  // put request to update workout exercises with a specific id
  app.put("/api/workouts/:id", (req, res) => {
    const { id } = req.params;

    
    db.updateOne({_id: id}, {$push: {exercises: req.body}})
    .then(updated => {
      res.json(updated);
    })
    .catch(err => {
      res.json(err);
    });
   });
  // request to workouts in range
  app.get("/api/workouts/range", (req, res) => {
    db.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
  });
};