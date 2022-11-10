var express = require('express');
var router = express.Router();
const { check, validationResult} = require("express-validator");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signup",
  check("username").notEmpty(),
  check("username", "Must be an email").isEmail(),
  check("password").notEmpty(),
  // check("password", "At least 5 and at most 10 characters ").isLength({ min: 5, max : 10 }),
  check("password", "Not Strong Enough").isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }),
  check("first_name").notEmpty(),
  check("last_name").notEmpty(),
  function (req, res, next) {
  // Validate
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  // error response
  return res.status(400).json({ errors: errors.array() });
  }
  return res.json({"message":"Supply correct parameters"});
  }
 );
 

module.exports = router;
