const User = require('../models/User');

// @desc      Register User
// @route     POST /register
// @access    Public
exports.register = async (req, res, next) => {

  console.log(req.body);

  User.create(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
}