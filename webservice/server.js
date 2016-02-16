var express = require('express'),
    app = express(),
    port = 3000,
    fs = require('fs'),
    mongoose = require('mongoose'),
    morgan = require('morgan');

mongoose.connect('mongodb://localhost:27017/houseprices');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

var defaultRoute = require('./routes/default');
var terracedRoute = require('./routes/terraced');


app.use('/terraced', terracedRoute);
app.use('/', defaultRoute);

app.listen(port,function(){
  console.log('App listening on port: %s',port);
});
