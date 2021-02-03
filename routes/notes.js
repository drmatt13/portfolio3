const express = require("express");
const router = express.Router();

const { getCollections, getNote } = require("../controllers/notes");

router
  .route('/')
    .get(getCollections);

router
  .route('/:collection/:note')
    .get(getNote);

module.exports = router;