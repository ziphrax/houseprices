var express = require('express'),
    app = express(),
    port = 3000,
    fs = require('fs'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    path = require('path');

mongoose.connect('mongodb://localhost:27017/houseprices');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

var defaultRoute = require('./routes/default');
var terracedRoute = require('./routes/terraced');
var regionsRoute = require('./routes/regions');

app.use('/regions', regionsRoute);
app.use('/terraced', terracedRoute);
app.use('/', defaultRoute);
app.use('/assets',express.static('client/assets'));
app.use('/bower_components',express.static('client/bower_components'));

app.listen(port,function(){
  console.log('App listening on port: %s',port);
});
