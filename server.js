// require node packages
const express = require("express");
const mongoose = require("mongoose");

// initialise express
const app = express();

// set port
const PORT = process.env.PORT || 3000;

// Setting up express for loading static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require html and api routes 
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// mongoose setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true
});

// listening to assigned port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
})
