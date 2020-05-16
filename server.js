var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Feedback = require("./api/models/feedbackModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://junaid:Admin123@cluster0-b85yk.mongodb.net/test?retryWrites=true&w=majority"
);



var routes = require("./api/routes/feedbackRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("server started on: " + port);
