var express = require('express');
var Region = require('../models/regions');
var router = express.Router();

router.get('/',function(req,res){
  Region.find({}).exec(function(err,docs){
    if(err){
      res.status(500).json({status:500,message: err.message, url: '/regions'});
    } else {
      res.json({status:200,message: 'ok',data: docs, url: '/regions'});
    }
  });
});

module.exports = router;
