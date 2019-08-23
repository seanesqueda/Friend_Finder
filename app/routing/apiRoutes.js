var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (err, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        // Log array of answers as an object here and compare to
        // find best match
    });
}