var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.burger.findAll({}).then(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {

    db.burger.create({
        burger_name: req.body.burger_name
    }).then(function (data) {
        // Send back the ID of the new quote
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;

    // console.log("condition", condition);

    db.burger.update({ 
        devoured: true 
    }, {
        where:{
            id: id
        }
    }
    ).then(function (data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;