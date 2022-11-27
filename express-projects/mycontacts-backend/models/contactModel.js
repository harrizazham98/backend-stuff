const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactModelSchema = new Schema({
  User: { type: mongoose.Schema.Types.ObjectId, required: true,  },
  name: { type: String, required: [true, "Please add the contact name"],  },
  email: { type: String, require: [true, "Please add the contact email address"] },
  phone: { type: String, required: [true, "Please add the contact number"] },
  timestamp : {type: Date}
});

// Export model
module.exports = mongoose.model("contactModel", contactModelSchema);