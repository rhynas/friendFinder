var express = require("express");
var friends = require("../data/friends.js");
// var path = require("path");

var app = express.Router();

app.get("/friends", function(req, res) {
	res.json(friends);
});


app.post("/friends", function(req, res) {
	// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
	// It will do this by sending out the value "true" have a table
	  // friends.push(req.body);
	  // res.json(true);
	var match = compatibility(req.body);
	// console.log(match);
	res.json(match);
});

function getSum(total, num){
  return parseInt(total) + parseInt(num);
}

function compatibility(user){
   //Define variables
   var bestMatch = 0; //will get the closest match in the array of friends
   var difference = 0; //Holds the differenfence between the friend score and the user scores
   var friendScore = 0; //Hold the score value for each friend in the array
   var userScore = user.scores.reduce(getSum);
   var current = friends[0].scores.reduce(getSum);
   //Loop over the array to calculate the difference
   //between the user score and the current list of friends scores
   for (var i = 0 ; i < friends.length ; i++){
      friendScore = friends[i].scores.reduce(getSum);
      console.log(friends[i].name, 'score ', friendScore)
      difference = Math.abs(friendScore - userScore);
      if (difference < Math.abs(userScore - current)){
         current = friendScore;
         bestMatch = i;
      }

   }
   // console.log('User Score: ' + userScore);
   // console.log('Match: ' + bestMatch);
   return(friends[bestMatch]);
}

// Export routes for server.js to use.
module.exports = app;
