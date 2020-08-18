"use strict";

const mongoose = require("mongoose");
const { uri } = require("./index");

module.exports = {
  init: initMongoose,
};

function initMongoose(app) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {});

  process.on("SIGINT", cleanup);

  function cleanup() {
    mongoose.connection.close(function () {
      process.exit();
    });
  }
}
