var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.render('index');
	res.sendFile(path.join(__dirname, "/index.html"));
});

// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/index.html"));
// });

module.exports = router;
