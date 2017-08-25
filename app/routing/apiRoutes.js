// ===============================================================================
// LOAD DATA
// ===============================================================================
var friendsArray = require("../data/friends");
var path = require("path");
var result = 0;


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------
app.post("/api/new", function(req, res) {

  var newFriend = req.body;

  var resultsArr = [];

  for (var j = 0; j < friendsArray.length; j++) {
    var temp = 0;
  for (var i = 0; i < (newFriend.score).length; i++) {

    temp += Math.abs((parseInt(newFriend.score[i]) - parseInt((friendsArray[j].scores[i]))));

  }

  resultsArr.push(parseInt(temp));

  }

  friendsArray.push(newFriend);

  results = Math.min.apply(null, resultsArr);
  results = resultsArr.indexOf(results);


    // We then display the JSON to the users
  res.json(friendsArray[results]);
});






  // ---------------------------------------------------------------------------

};
