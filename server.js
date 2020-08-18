"use strict";

const express = require("express");
const app = express();

const { PORT } = require("./app/config");

require("./app/config/express").init(app);
require("./app/config/mongoose").init(app);
require("./app/config/routes").init(app);

app.all(function (req, res, next) {
  res.json({
    status: "fail",
    message: `Can't find ${req.route} on this server`,
  });
});

app.use(function (err, req, res, next) {
  return res.status(err.status || 400).json({
    status: "error",
    message: (err && err.message) || "Default message",
  });
});

app.listen(PORT, function () {
  console.log(`API on port ${PORT}`);
});
