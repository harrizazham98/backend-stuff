var express = require('express');
var router = express.Router();
const { check, validationResult} = require("express-validator");
var connection = require('../database.js')


//CATEGORY
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//LIST
router.get('/category', function(req, res, next) {
  connection
 .raw(`select * from category;`) // it is a promise
 .then(function (result) {
 var categories = result[0];
 // send back the query result as json
 res.json({
 category: categories,
 });
 })
 .catch(function (error) {
 // log the error
 console.log(error);
 res.json(500, {
 "message": error
 });
 });
});

//RETRIEVE
/* Retrieve a manufacturer with id = :id */
 router.get('/category/:id', function(req, res, next) {
   //knex connection
   connection
  .raw(`select * from category where id = ?`,
 [req.params["id"]])
   .then(function (result) {
   var categories = result[0];
   // send back the query result as json
  res.json({
  category: categories[0],
  });
  })
  .catch(function (error) {
  // log the error
 console.log(error);
  res.json(500, {
 message: error,
  });
 });
 });
 



// router.get("/category/:id",
//  check("id").isInt(),
//  function (req, res, next) {
//  // Validate
//  const errors = validationResult(req);
//  if (!errors.isEmpty()) {
//  // error response
//  return res.status(400).json({ errors: errors.array() });
//  }
//  connection
//  raw(`select * from category where id = ` +req.params["id"])
//  // it is a promise
//  .then(function (result) {
//  var categories = result[0];
//  res.json({
//  result: parseInt(req.params["id"]) , "status" : "gotten", category : categories
//  });
//  })
//  .catch(function (error) {
//   // log the error
//   console.log(error);
//   res.json(500, {
//   "message": error
//   });
//   });
// });

//CREATE
router.post('/category',function(req, res, next){ 
  console.log("POST Request", req.body);
 var promise = connection.raw(
 `
 insert into category (category_name)
 values (?)
 `,
 [req.body["name"]]
 );
 promise.then(function (result) {
 res.json({
 "message": "Done",
 })
 }).catch(function (error) {
 // log the error
 console.log(error);
 res.json(500, {
 message: error,
 });
 });


});

//UPDATE
router.put('/category/:id', check("id").isInt(),
function (req, res, next) {
// Validate
const errors = validationResult(req);
if (!errors.isEmpty()) {
// error response
return res.status(400).json({ errors: errors.array() });
}
console.log("PUT Request", req.body);
 var promise = connection.raw(
 `
 update category
 set category_name = ?
 where id = ?
 `,
 [req.body["name"], req.params["id"]]
 );
 promise.then(function (result) {
 res.json({
 "message": "Done",
 })
 }).catch(function (error) {
 // log the error
 console.log(error);
 res.json(500, {
 message: error,
 });
 });
});

//DELETE
router.delete('/category/:id', check("id").isInt(),
function (req, res, next) {
// Validate
const errors = validationResult(req);
if (!errors.isEmpty()) {
// error response
return res.status(400).json({ errors: errors.array() });
}
var promise = connection.raw(
  `
  delete from category
  where id = ?
  `,
  [req.params["id"]]
  );
  promise.then(function (result) {
  res.json({
  "message": "Done",
  })
  }).catch(function (error) {
  // log the error
  console.log(error);
  res.json(500, {
  message: error,
  });
  });
 
});

//ITEMS

//LIST
router.get('/items', function(req, res, next) {
  connection
  .raw(`select * from items;`) // it is a promise
  .then(function (result) {
  var items = result[0];
  // send back the query result as json
  res.json({
  item: items,
  });
  })
  .catch(function (error) {
  // log the error
  console.log(error);
  res.json(500, {
  "message": error
  });
  });
});

//RETRIEVE
router.get('/items/:id', check("id").isInt(),
function (req, res, next) {
// Validate
const errors = validationResult(req);
if (!errors.isEmpty()) {
// error response
return res.status(400).json({ errors: errors.array() });
}
connection
 .raw(`select * from items where id = ?;`, [req.params["id"]]) // it is a promise
 .then(function (result) {
 var items = result[0];
 res.json({
 result: parseInt(req.params["id"]) , "status" : "gotten", item : items
 });
 })
 .catch(function (error) {
  // log the error
  console.log(error);
  res.json(500, {
  "message": error
  });
  });
});

//CREATE
router.post('/items', function(req, res,next){
console.log("POST Request", req.body);
var promise = connection.raw(
`
insert into items ( name, price, category_id)
values (?,?,?)
`,
[req.body["name"],req.body["price"],req.body["category_id"]]
);
promise.then(function (result) {
res.json({
"message": "Done",
})
}).catch(function (error) {
// log the error
console.log(error);
res.json(500, {
message: error,
});
});
});

//UPDATE
router.put('/items/:id', check("id").isInt(),
function (req, res, next) {
// Validate
const errors = validationResult(req);
if (!errors.isEmpty()) {
// error response
return res.status(400).json({ errors: errors.array() });
}
console.log("PUT Request", req.body);
 var promise = connection.raw(
 `
 update items
 set name = ?
 where id = ?
 `,
 [req.body["name"], req.params["id"]]
 );
 promise.then(function (result) {
 res.json({
 "message": "Done",
 })
 }).catch(function (error) {
 // log the error
 console.log(error);
 res.json(500, {
 message: error,
 });
 });
});

//DELETE
router.delete('/items/:id', check("id").isInt(),
function (req, res, next) {
// Validate
const errors = validationResult(req);
if (!errors.isEmpty()) {
// error response
return res.status(400).json({ errors: errors.array() });
}
var promise = connection.raw(
  `
  delete from items
  where id = ?
  `,
  [req.params["id"]]
  );
  promise.then(function (result) {
  res.json({
  "message": "Done",
  })
  }).catch(function (error) {
  // log the error
  console.log(error);
  res.json(500, {
  message: error,
  });
  });
});

module.exports = router;
