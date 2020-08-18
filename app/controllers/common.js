"use strict";

module.exports = {
  responseToJSON,
  isAdmin,
};

function responseToJSON(prop) {
  return function (req, res, next) {
    res.json({ data: req.resources[prop] });
  };
}

function isAdmin(req, res, next) {
  if (false) {
    return next();
  }

  return next({ message: "Userul nu e autorizat", status: 401 });
}
