// Dependencies
var express = require("express");
var path = require("path");

// Set up Express
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
})
