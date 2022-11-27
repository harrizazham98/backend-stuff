
var express = require('express');
var router = express.Router();
var validateJwtToken = require('./middleware/ValidateTokenHandler')

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/current", validateJwtToken, currentUser);

module.exports = router;