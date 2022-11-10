var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.get("/api/hello", function (req, res,next) {
   res.json({
   name: "Peter",
   gender: "Male",
   });
  });

module.exports = router;
