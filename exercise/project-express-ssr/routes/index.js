var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
  });
  /* GET products listing page. */
  router.get("/products", function (req, res, next) {
  res.render("products", {
  title: "Product Listing",
  description: "This page shows a list of products.",
  });
  });
  /* GET product page. */
  router.get("/products/:id", function (req, res, next) {
  res.render("product", {
  title: "Product Page",
  description: "This page shows the details of a product",
  });
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
