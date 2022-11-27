
var express = require('express');
var validateJwtToken = require('./middleware/ValidateTokenHandler')
var router = express.Router();
router.use(validateJwtToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;