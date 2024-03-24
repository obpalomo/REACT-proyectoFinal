const moongose = require("mongoose");

const filmSchema = new moongose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  synopsis: { type: String, required: false },
  category: { type: String, required: false },
  director: { type: String, require: false },
  imaage: {type: String, require:false}
});

module.exports = moongose.model("films", filmSchema);
