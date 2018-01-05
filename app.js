var express = require('express');
var app = express();
var port = 3000;

//Template setup
app.set('view engine', 'ejs');

//Routes
app.get('/', function(req,res) {
  console.log("This is the homepage");
  res.render('home');
});

app.listen(port, function() {
  console.log('Server starting on port ' + port);
});
