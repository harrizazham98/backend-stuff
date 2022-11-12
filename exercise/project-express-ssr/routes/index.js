var express = require('express');
var router = express.Router();

var manufacturers = [
  {
  id: 1,
  name: "Lego",
  imageUrl: "https://via.placeholder.com/150",
  },
  {
  id: 2,
  name: "Disney",
  imageUrl: "https://via.placeholder.com/150",
  },
  ];
  var products = [
  {
  id: 1,
  name: "Lego City 2824: Advent Calendar 2010",
  price: 3.42,
  imageUrl: "https://via.placeholder.com/150",
  description: "description placeholder",
  manufacturerId: 1,
  },
  {
  id: 2,
  name: "LEGO Friends 41016: Advent Calendar",
  price: 24.95,
  imageUrl: "https://via.placeholder.com/150",
  description: "description placeholder",
  manufacturerId: 1,
  },
  {
  id: 3,
  name: "LEGO Star Wars 75018: Jek-14's Stealth Starfighter",
  price: 68.87,
  imageUrl: "https://via.placeholder.com/150",
  description: "description placeholder",
  manufacturerId: 1,
  },
  {
    id:4,
    name: "Disney Phineas and Ferb 8 Ferb Plush, soft, cuddle doll toy",
price: 19.99,
imageUrl: "https://via.placeholder.com/150",
description: "description placeholder",
manufacturerId: 2,
},
{
id: 5,
name:
"DESPICABLE ME 2 - Minion cuddly Soft Toy - Plush Figures Banana 28-33 cm, Minion Typ:Bob",
price: 19.99,
imageUrl: "https://via.placeholder.com/150",
description: "description placeholder",
manufacturerId: 2,
},
];


/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
});
/* GET products listing page. */
router.get("/products", function (req, res, next) {
res.render("products", {
title: "Product Listing",
description: "This page shows a list of products.",
products: products,
});
});
/* GET product page. */
  router.get("/products/:id", function (req, res, next) {
// Fill in the code: get the parameter
var requestedId = req.params["id"];
console.log("Check",requestedId);


// Get the requested product from the product list
var requestedProduct = products.filter(function (product) {
return product.id == requestedId;
});

console.log(requestedProduct[0]);
// Check if the requested product id exist
if (requestedProduct.length > 0) {
res.render("product", {
title: requestedProduct[0].name,
product: requestedProduct[0],
description: requestedProduct[0].description,
imageUrl: requestedProduct[0].imageUrl,
});
} else {
// 404 Product not found
res.status(404).send("Product not found");
}
});

  /* GET manufacturer listing page. */
  router.get("/manufacturers", function (req, res, next) {
  res.render("manufacturers", {
  title: "Manufacturer Page",
  description: "This page shows a list of manufacturers."
  });
  });
  /* GET manufacturer page. */
  router.get("/manufacturers/:id", function (req, res, next) {
  res.render("manufacturer", {
  title: "Manufacturer Page",
  description: "This page shows a list of products from this manufacturer.",
  });
  });



    


  
module.exports = router;
