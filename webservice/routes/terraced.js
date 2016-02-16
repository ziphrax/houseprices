var express = require('express');
var Terraced = require('../models/terraced');
var router = express.Router();

router.get('/',function(req,res){
  Terraced.find({}).exec(function(err,docs){
    if(err){
      res.status(500).send(err.message);
    } else {
      res.json(docs);
    }
  });  
});

module.exports = router;
