var express = require('express');
var path = require('path');


//route to root which is home.html
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});
//route to home.html page
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//route to survey.html page 
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
});

//catch all route that needs to be put on the bottom or none of the pathways will work if it is placed on the top
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

