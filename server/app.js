// import dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// modules created by me
var addHandler =  require('./routes/add');
var subtractHandler =  require('./routes/subtract');
var multiplyHandler =  require('./routes/multiply');
var divideHandler =  require('./routes/divide');

// create an express app
var app = express();

// turn the raw request body into a 'body' object on all requests
app.use(bodyParser.urlencoded({extended:true}));

// set up routes
app.use('/add', addHandler);
app.use('/multiply', multiplyHandler);
app.use('/divide', divideHandler);
app.use('/subtract', subtractHandler);

app.get('/*', function(req, res) {
  var filePath = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, './public', filePath));
});

// start the server
const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Express server listening on port: ', port);
});
