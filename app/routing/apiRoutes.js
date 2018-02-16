var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendsList);
    });

    app.post("/api/friends", function(req,res){

        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var newFriend = req.body;
        var newFriendScore = newFriend.scores;
        console.log(newFriend);
        console.log(newFriendScore);
        var totalDifference = 0;

        // Examine all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
             console.log(friends[i]);
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores[j]; j++) {
                console.log("friend list" + friends[i].scores[j]);
                console.log("new friend score" + newFriendScore[j]);
                totalDifference += Math.abs(newFriendScore[j] - friends[i].scores[j]);
              

            // If lowest difference, record the friend match
            if (totalDifference <= friendMatch.friendDifference) {
                
                friendMatch.name = friends[i].name;
                friendMatch.photo = friends[i].photo;
                friendMatch.friendDifference = totalDifference;
            
            }
        }
    }

        // Add new user
    friendsList.push(newFriend);

        // Send appropriate response
    res.json(friendMatch);
});
        
        // console.log(newFriends);
        // friends.push(newFriends);
};        // res.json(newFriends);
  

