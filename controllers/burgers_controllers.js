var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/bugers");
})

router.get("/burgers", function(req,res) {
    burger.all(function(data) {
        var handlebarsObj = {burgers:data};
        console.log(handlebarsObj);
        
        res.render("index", handlebarsObj);
    })
})

router.post("/burgers/create", function(req,res) {
    burger.create(["burger_name", "devoured"], function() {
       var condition = "id = " + req.params.id;

       console.log("condition:", condition);

       burger.update({devoured: req.body.devoured}, condition, function() {
           res.redirect("/burgers");
       })
    })
})

module.exports = router;