// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express.Router();
// =============================================================

// Basic route that sends the user to the Home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

//User is directed to the Survey Web Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});


// If no route is found the user is redirected to the Home page
app.use(function(req, res) {
   res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Export routes for server.js to use.
module.exports = app;
