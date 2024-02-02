const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
  name: { type: String, required: false },
});

module.exports = moongose.model("users", userSchema);
