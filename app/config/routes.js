"use strict";
const path = require("path");

module.exports = {
  init: initRoutes,
};

function initRoutes(app) {
  const routePath = path.join(__dirname, "../routes");
  const routes = ["users", "communities"];

  routes.forEach(function (route) {
    app.use(require(`${routePath}/${route}`));
  });
}
