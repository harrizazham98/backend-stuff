var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("URL Params", req.params);
  res.render('index', { title: "food in Malaysia" });
});

/* GET home page. */
router.get('/about/:name', function(req, res, next) {
  console.log("URL Params", req.params);
  res.render('about', { title: "About", name_food : req.params.name });
});

module.exports = router;
