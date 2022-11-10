var express = require('express');
var router = express.Router();

/* GET customerd listing. */
router.get('/', function(req, res, next) {
    console.log("Retrieve all customers.");
 res.send("retrieve all customers");

  });

router.get('/:id', function(req, res, next) {
console.log("Retrieve a customer with id " + req.params["id"])
res.json({"id": req.params["id"], "name": "harriz", "age": "23"})
});


// POST 
router.post('/', function(req, res, next) {
    console.log("Create a new customer.");
    res.send("create a new customer");
   });

router.post('/:id', function(req, res, next) {
console.log("Create a customer with id " + req.params["id"]);
res.json({"id": req.params["id"], "name": "harriz", "age": "23"});
});



// PUT 
router.put('/', function(req, res, next) {
console.log("Bulk update customers.");
res.send("Update customer");
});

router.put('/:id', function(req, res, next) {
    console.log("Update a customer with id " + req.params["id"])
    res.json({"id": req.params["id"], "name": "harriz", "age": "24"});
   });
   


// DELETE 
router.delete('/', function(req, res, next) {
console.log("Bulk delete customers.");
res.send("delete customer");
});

router.delete('/:id', function(req, res, next) {
    console.log("Delete a customer with id " + req.params["id"])
    res.json({});
   });

module.exports = router;
