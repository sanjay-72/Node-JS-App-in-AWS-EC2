//jshint esversion:6    
const express = require("express");
const app = express();
const PORT = 80;
const Quotes = require("./quotes.json")

app.get("/", function (req, res) {
    myNum = Math.random() * 101;
    myNum = Math.round(myNum);
    res.send(Quotes["quotes"][myNum]["quote"] + "<br><br>" + "By : " + Quotes["quotes"][myNum]["author"]);
});

app.listen(PORT, function () {
    console.log("App is running on port : " + PORT);
});