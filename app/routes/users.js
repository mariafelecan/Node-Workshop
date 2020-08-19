"use strict";

const express = require("express");
const router = express.Router();
const multer = require("multer");

const usersController = require("../controllers/usersController");
const commonController = require("../controllers/common");
const { pathToUpload } = require("../config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pathToUpload);
  },
  filename: function (req, file, cb) {
    console.log(file, "file");
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getUserById,
} = usersController;
const { responseToJSON } = commonController;

router.post("/upload-profile", upload.single("profilePicture"), function (
  req,
  res,
  next
) {
  res.send("Uploaded");
});

router.get("/download-image", function (req, res, next) {
  const pathToFile = `${pathToUpload}/1597823766482-DSCN1228.JPG`;
  res.download(pathToFile);
});

router.get("/users", getUsers, responseToJSON("users"));

router.post("/users", createUser);

router.delete("/users/:id", getUserById, deleteUser, responseToJSON("users"));

router.put("/users/:id", updateUser, getUserById, responseToJSON("users"));

module.exports = router;
