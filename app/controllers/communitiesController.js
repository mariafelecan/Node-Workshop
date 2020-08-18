"use strict";
const Community = require("../models/communityModel");

module.exports = {
  getCommunities,
  getCommunityById,
  createCommunity,
  deleteCommunity,
  updateCommunity,
};

function getCommunities(req, res, next) {
  Community.find(function (err, result) {
    if (err) {
      return next(err);
    }

    req.resources.communities = result;
    return next();
  });
}

function getCommunityById(req, res, next) {
  Community.find({ _id: req.params.id }, function (err, result) {
    if (err) {
      return next(err);
    }
    req.resources.communities = result;

    return next();
  });
}

function deleteCommunity(req, res, next) {
  Community.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      return next(err);
    }

    return next();
  });
}

function updateCommunity(req, res, next) {
  Community.update({ _id: req.params.id }, req.body, function (err, result) {
    if (err) {
      return next(err);
    }

    return next();
  });
}

function createCommunity(req, res, next) {
  const community = new Community(req.body);

  community.save(function (err, result) {
    if (err) {
      return next(err);
    }

    return res.json(result);
  });
}
