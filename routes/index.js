/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();

exports.view = function(req, res){
  res.render('index');
};

module.exports = router;
