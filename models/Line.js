const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Line = new Schema(
  {
    line: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Line", Line);
