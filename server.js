// include server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// require Articel Schema
var Article = require("./models/Article");

var app = express();

var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
// change mongo connection when hosting on heroku
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// route to retrieve saved articles from MongoDB
app.get("/api/saved", function(req, res) {
	Article.find({}).sort([
		["date", "descending"]
	]).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
// route to post saved articles to MOngoDB
app.post("/api/saved", function(req, res) {
	console.log("Body: " + req.body.title);

	Article.create({
		title: req.body.title,
		date: req.body.date,
		url: req.body.url
	}, function(err) {
		if (err) {
			console.log(err);
		}else{
			res.send("Saved Search");
		}
	});
});
// route to delete a specific article
app.delete("/api/saved/:id", function(req, res) {

	Article.findByIdAndRemove({ "_id": req.params.id })

	.exec(function(err, doc) {
		if (err) {
			console.log(err);
		}else{
			console.log("Article Successfully Deleted");
		}
	});
});

// route to display page
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// listener
app.listen(PORT, function() {
	console.log("App listening on Port: " + PORT)
});

// /api/saved (get) - your components will use this to query MongoDB for all saved articles

// /api/saved (post) - your components will use this to save an article to the database

// /api/saved (delete) - your components will use this to delete a saved article in the database

// * (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes