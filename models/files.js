const mongoose = require("mongoose");

const filesSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
  },
  receiver: {
    type: String,
  },
});

module.exports = mongoose.model("File", filesSchema);
