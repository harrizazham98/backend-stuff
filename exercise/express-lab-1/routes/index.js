var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express! Now I am going to complete the assessment to gain the knowledge of Backend Engineer' });
});

module.exports = router;
