
/**
 * Module dependencies.
 */

var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    typogr = require('typogr'),
    routes = require('./routes'),
    user = require('./routes/user'),
    marked = require('marked'),
    http = require('http'),
    path = require('path');


var app = express();

// Middleware Config

app.configure(function() {
  app.use(stylus.middleware({
    src: __dirname + '/assets',
    dest: __dirname + '/public',
    compile: function(str, path) {
      return stylus(str)
        .use(nib())
        .set('filename', path)
        .set('compress', true);
    }
  }));
  app.use(express.static(__dirname + '/public'));
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.locals.basedir = app.set('views');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use('/', require('./routes/main'));
app.use('/about', require('./routes/about'));
app.use('/interfaces', require('./routes/interfaces'));
app.use('/article', require('./routes/articles'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
