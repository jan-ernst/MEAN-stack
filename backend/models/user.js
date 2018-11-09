const mongoose = require("mongoose");
const uniqueVaidator = requrie("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueVaidator);

module.exports = mongoose.model("User", userSchema);
