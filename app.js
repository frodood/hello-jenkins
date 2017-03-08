var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world Dasun');
});
 
app.listen(process.env.PORT || 5000);
console.log("App Running on port 5000"); 
module.exports = app;
