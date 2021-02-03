const { orderBy } = require('natural-orderby');

//  collections = {
//    collection: [
//      app1,
//      app2,
//      app3
//    ]
//  }

//  apps = {
//    collectionSlug: {
//      appSlug1: {route: [x1, x2], html, css, js},
//      appSlug2: {route: [x1, x2], html, css, js},
//      appSlug3: {route: [x1, x2]. html, css, js}
//    }
//  }

const fs = require("fs");
const collections = {};
const apps = {};
fs.readdirSync(__dirname + "/../client/public/data/apps").forEach(collection => {
  collections[collection.replace(/_/g," ")] = [];
  apps[collection.replace(/_/g,"-").toLowerCase()] = {};
  let folders = orderBy(fs.readdirSync(__dirname + `/../client/public/data/apps/${collection}`));
  folders.forEach(folder => {
    let folderEdit = folder;
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(folderEdit.charAt(0))) {
      while (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_'].includes(folderEdit.charAt(0))) folderEdit = folderEdit.substring(1);
    }
    console.log(folderEdit);
    collections[collection.replace(/_/g," ")].push(folderEdit.replace(/_/g," "));
    apps[collection.replace(/_/g,"-").toLowerCase()][folderEdit.replace(/_/g,"-").toLowerCase()] = {route: [collection, folder]};
    fs.readdirSync(__dirname + `/../client/public/data/apps/${collection}/${folder}`).forEach(file => {
      let data = fs.readFileSync(__dirname + `/../client/public/data/apps/${collection}/${folder}/${file}`, {encoding:'utf8', flag:'r'});
      apps[collection.replace(/_/g,"-").toLowerCase()][folderEdit.replace(/_/g,"-").toLowerCase()][file.split('.')[0]] = data;
    });
    console.log(folder.replace(/_/g,"-").toLowerCase());
  });
});


// @desc      Get collections
// @route     GET /apps
// @access    Public
exports.getCollections = async (req, res, next) => {
  res
    .status(200)
    .json(collections);
}

// @desc      Get app
// @route     GET /apps/:collection/:app
// @access    Public
exports.getApp = async (req, res, next) => {
  const { collection, app } = req.params;
  res
    .status(200)
    .json(apps[collection][app]);
}