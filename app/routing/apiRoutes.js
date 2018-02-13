var express = require('express');
var path = require('path');
  
app.get("/api/friends", function(req, res){
    res.json(friends);
});

app.post("/api/friends", function(req,res){
    var newFriends = req.body;
    
    console.log(newFriends);
    friends.push(newFriends);
    res.json(newFriends);
    
});




