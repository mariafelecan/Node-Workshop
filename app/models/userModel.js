const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: false,
  },
  age: {
    type: Number,
  },
  community: {
    type: ObjectId,
    ref: "Community",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema, "users");
