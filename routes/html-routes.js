// require path to use relative routes to html files
const path = require("path");

module.exports = (app) => {
  // routes to handle clients request for files in the public folder. Called when 'continue workout' & 'new workout' is clicked
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

  // this one is called when client clicks the 'fitness tracker dashboard' link on the top left corner of the page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};