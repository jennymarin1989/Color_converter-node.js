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
});

app.get("/hexToRgb", function(req, res){
	var hex = req.query.hex
	var rgb = converter.hexToRgb(hex);

	res.send(JSON.stringify(rgb)); // Returns a Json string representing the given value.
})

app.listen(3000);