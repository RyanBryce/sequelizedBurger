var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var sequelize = require('sequelize');
var db = require('./models')

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync().then(function () {  
  app.listen(port);
    console.log("App now listening at localhost:" + port);
})
