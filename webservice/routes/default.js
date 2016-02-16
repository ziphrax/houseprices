var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.json({status: 200, message: 'ok',url:'/'});
});

module.exports = router;
