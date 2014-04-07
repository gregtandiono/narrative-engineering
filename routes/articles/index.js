var express = require('express');
var post = require('../../models/posts/test.json');
var app = express();

app.use(function(req, res, next) {
  req.app.parent && res.locals(req.app.parent.locals); // import locals from parent app
  next();
});

app.get('/', function(req, res, next) {
  res.locals.post = post;
  res.locals.title = 'Interfaces | Gregory Tandiono | Narrative Engineering';
  res.locals.description = 'Interface ideas, concept building, and tutorials';
  res.locals.meta = 'Interface ideas, concept building, and tutorials';
  res.render('article');
});

module.exports = app;