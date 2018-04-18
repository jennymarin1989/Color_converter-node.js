const express = require("express");
const app = express();
const converter = require("./converter");

app.get("/", function(req, res){
	res.send("Welcome to Color Converter");
});

app.get("/rgbToHex", function(req, res){
	var red = parseInt(req.query.red, 10);
	var green = parseInt(req.query.red, 10);
	var blue = parseInt(req.query.red, 10);
	
	var hex = converter.rgbToHex(red, green, blue);
	res.send(hex);
})

app.listen(3000);