var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo5/:my_word', function(req, res, next) {
  console.log("URL Params", req.params)
  res.render('index', { title: 'Express', word: req.params.my_word });
});

router.get('/add/:first/:second', function(req, res, next) {
  console.log("URL Params", req.params)
  const first_int = parseFloat(req.params.first)
  const second_int = parseFloat(req.params.second)
  var sum =first_int + second_int
  var fSum = sum.toFixed(1)

  res.render('add', { first_val: req.params.first, second_val: req.params.second, operation: "+", equal: "=", final_result: fSum.toString() });
});

router.get('/square-area/:width/:length', function(req, res, next) {
  console.log("URL Params", req.params)
  const widthSquare = parseInt(req.params.width)
  const lengthSquare = parseInt(req.params.length)
  var area = widthSquare * lengthSquare

  res.render('area', {first_val: req.params.width, second_val: req.params.length, operation: "*", final_result: area.toString() });
});

module.exports = router;
