const express = require("express");
const router = express.Router();

const { getCollections, getApp } = require("../controllers/apps");

router
  .route('/')
    .get(getCollections);

router
  .route('/:collection/:app')
    .get(getApp);

module.exports = router;