"use strict";

const express = require("express");
const router = express.Router();

const communitiesController = require("../controllers/communitiesController");
const commonController = require("../controllers/common");

const {
  getCommunities,
  deleteCommunity,
  createCommunity,
  updateCommunity,
  getCommunityById,
} = communitiesController;
const { responseToJSON, isAdmin } = commonController;

router.get(
  "/communities",
  isAdmin,
  getCommunities,
  responseToJSON("communities")
);

router.get("/communities/:id", getCommunityById, responseToJSON("communities"));

router.post("/communities", createCommunity);

router.delete(
  "/communities/:id",
  getCommunityById,
  deleteCommunity,
  responseToJSON("communities")
);

router.put(
  "/communities/:id",
  updateCommunity,
  getCommunityById,
  responseToJSON("communities")
);

module.exports = router;
