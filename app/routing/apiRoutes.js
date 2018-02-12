var express = require('express');
var path = require('path');


app.get("/api/friends", function(req, res){
    res.json(friends);
});

