var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


// gets the index page and allows the burgers table to display via the hbsObject
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.name
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

//Exporting to ../server.js
module.exports = router