var express = require('express');
var postList = require('../../models/posts/post.json');
var post = require('../../models/posts/test.json');
var app = express();

var postTitle = postList.titles;


app.use(function(req, res, next) {
  req.app.parent && res.locals(req.app.parent.locals); // import locals from parent app
  next();
});

app.get('/', function(req, res, next) {
  res.locals.postList = postList;
  res.locals.postTitle = postTitle;
  res.locals.post = post;
  res.locals.title = 'Interfaces | Gregory Tandiono | Narrative Engineering';
  res.locals.description = 'Interface ideas, concept building, and tutorials';
  res.locals.meta = 'Interface ideas, concept building, and tutorials';
  res.render('interfaces/index');
});

app.get('/pianokey-layout', function(req, res, next) {
  res.locals.post = post;
  res.locals.title = 'Interfaces | Gregory Tandiono | Narrative Engineering';
  res.locals.description = 'Interface ideas, concept building, and tutorials';
  res.locals.meta = 'Interface ideas, concept building, and tutorials';
  res.render('interfaces/posts/pianokey-layout/index');
});

module.exports = app;