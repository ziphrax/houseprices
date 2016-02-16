var express = require('express');
var Terraced = require('../models/terraced');
var router = express.Router();

router.get('/',function(req,res){
  Terraced.find({}).exec(function(err,docs){
    if(err){
      res.status(500).json({status:500,message: err.message, url: '/terraced'});
    } else {
      res.json({status:200,message: 'ok',data: docs, url: '/terraced'});
    }
  });
})
  .get('/:region',function(req,res){
    console.log(req.params.region);
  Terraced.find({}).select('_id Year Quater Period ' + req.params.region.toUpperCase()).exec(function(err,docs){
    if(err){
      res.status(500).json({status:500,message: err.message, url: '/terraced/' + req.params.region.toUpperCase()});
    } else {
      res.json({status:200,message: 'ok', data: docs, url: '/terraced/' + req.params.region.toUpperCase()});
    }
  });
});

module.exports = router;
