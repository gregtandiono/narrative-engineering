var express = require('express');

var app = express();


app.use(function(req, res, next) {
  req.app.parent && res.locals(req.app.parent.locals); // import locals from parent app
  next();
});

app.get('/', function(req, res, next) {
  res.locals.title = 'About';
  res.locals.description = 'About lorem';
  res.locals.meta = 'about Ipsum';
  res.render('about');
});

module.exports = app;