const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  department: {
    type: String,
    required: true,
    unique: true,
  },
  manager: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Community", communitySchema, "communities");
