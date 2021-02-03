const { orderBy } = require('natural-orderby')

const fs = require("fs");
const collections = {};
const notes = {};
fs.readdirSync(__dirname + "/../client/public/data/notes").forEach(collection => {
  collections[collection] = [];
  notes[collection.replace(/ /g,"-").toLowerCase()] = {};
  let files = orderBy(fs.readdirSync(__dirname + `/../client/public/data/notes/${collection}`));
  files.forEach(file => {
    let data = JSON.stringify(require(`../client/public/data/notes/${collection}/${file}`));
    let note = file.substring(0, file.length-3); 
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(note.charAt(0))) {
      while (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ' '].includes(note.charAt(0))) note = note.substring(1);
    }
    collections[collection].push(note)
    notes[collection.replace(/ /g,"-").toLowerCase()][note.replace(/ /g,"-").toLowerCase()] = data; 
  });
});

// @desc      Get collections
// @route     GET /notes
// @access    Public
exports.getCollections = async (req, res, next) => {
  res
    .status(200)
    .json(collections);
}

// @desc      Get note
// @route     GET /notes/:collection/:note
// @access    Public
exports.getNote = async (req, res, next) => {
  const { collection, note } = req.params;
  res
    .status(200)
    .json(notes[collection][note]);
}