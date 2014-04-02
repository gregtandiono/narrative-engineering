var express = require('express');

var app = express();


app.use(function(req, res, next) {
  req.app.parent && res.locals(req.app.parent.locals); // import locals from parent app
  next();
});

app.get('/', function(req, res, next) {
  res.locals.title = 'Home';
  res.locals.description = 'Lorem';
  res.locals.meta = 'Ipsum';
  res.render('index');
});

module.exports = app;