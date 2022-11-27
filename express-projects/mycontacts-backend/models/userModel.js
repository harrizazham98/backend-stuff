const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userModelSchema = new Schema({
  username: { type: String, required: [true, "Please add the username"],  },
  email: { type: String, required: [true, "Please add the user email address"],  },
  password: { type: String, require: [true, "Please add the user password"] },
  timestamp: { type: Date },
});

// Export model
module.exports = mongoose.model("userModel", userModelSchema);