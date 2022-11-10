var express = require('express');
var router = express.Router();
var connection = require('../database.js')

//LIST
router.get('/manufacturers', function(req, res, next) {
  //knex connection
  connection
  .raw(`select * from manufacturer;`) // it is a promise
  .then(function (result) {
  var manufacturers = result[0];
  // send back the query result as json
  res.json({
  manufacturers: manufacturers,
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
router.get('/manufacturers/:id', function(req, res, next) {
  //knex connection
  connection
  .raw(`select * from manufacturer where id = ?`, [req.params["id"]]) // it is a promise
  .then(function (result) {
  var manufacturers = result[0];
  // send back the query result as json
  res.json({
  manufacturers: manufacturers[0],
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

 router.post('/manufacturers', function(req, res, next) {
  console.log("POST Request", req.body);
  var promise = connection.raw(
  `
  insert into manufacturer (name)
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

 router.put('/manufacturers/:id', function(req, res, next) {
 console.log("PUT Request", req.body);
 var promise = connection.raw(
 `
 update manufacturer
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

router.delete('/manufacturers/:id', function(req, res, next) {
  var promise = connection.raw(
  `
  delete from manufacturer
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
