var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

var app = express();

var path = require("path");

app.use('/', express.static(path.join(__dirname, '/public')))

router.get("/", function (req, res){
    res.render("index")
})


//Exporting to ../server.js
module.exports = router