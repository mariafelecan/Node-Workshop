"use strict";

const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const commonController = require("../controllers/common");

const {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getUserById,
} = usersController;
const { responseToJSON } = commonController;

router.get("/users", getUsers, responseToJSON("users"));

router.post("/users", createUser);

router.delete("/users/:id", getUserById, deleteUser, responseToJSON("users"));

router.put("/users/:id", updateUser, getUserById, responseToJSON("users"));

module.exports = router;
