var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  const products = [
    {
    id: "9aa711b367533c012cb110d7ebca844b",
    productName: "Preiser 30411 Horse Drawn Box Wagon",
    MadeIn : "Malaysia",
    price: 137.16,
    active: true,
    },
    {
    id: "d160b9ad8d9c7c7ed1c207a77e9934cc",
    productName: "Roco 10908 Seuthe Smoke Oil",
    MadeIn : "Malaysia",
    price: 6.5,
    active: true,
    },
    {
    id: "f02b2132fcb3460565b5de94c05be8a8",
    productName:
    "Subway train 500 form three-car basic set red gauge N 10-1134 Marunouchi Line",
    MadeIn : "USA",
    price: 45.75,
    active: false,
    },
    {
    id: "bb2466d62f3fdc9510272ee5233694d3",
    productName: "Walthers Trainline 931-1676 TL 50' PD Boxcar ATSF",
    MadeIn: "USA",
    price: 15.0,
    active: true,
    },
   ];
  

   res.render("index", {products:products});

});

module.exports = router;


 