"use strict";
const User = require("../models/userModel");

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};

function getUsers(req, res, next) {
  User.find()
    .populate("community", "department manager")
    .sort({ name: 1 })
    .exec(function (err, result) {
      if (err) {
        return res.send("Error on Get Users");
      }

      req.resources.users = result;
      next();
    });
}

function getUserById(req, res, next) {
  User.find({ _id: req.params.id }, function (err, result) {
    if (err) {
      return res.send("Error on Get User By Id");
    }
    req.resources.users = result;

    next();
  });
}

function deleteUser(req, res, next) {
  User.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      return res.send("Error on Delete User");
    }

    next();
  });
}

function updateUser(req, res, next) {
  User.update({ _id: req.params.id }, req.body, function (err, result) {
    if (err) {
      return res.send("Error on Update User");
    }

    next();
  });
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (err, result) {
    if (err) {
      next(err);
    }

    return res.json(result);
  });
}
