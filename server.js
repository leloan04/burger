var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");

var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride("_method"));
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars");
app.use("/", routes);

var port = process.envPORT || 3000;
app.listen(port);