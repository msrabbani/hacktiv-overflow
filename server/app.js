var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')

var index = require('./routes/index');
var users = require('./routes/users');
var threads = require('./routes/threads');
var answers = require('./routes/answers');
var sign = require('./routes/sign');


var app = express();

app.use(cors())

mongoose.connect('mongodb://msr:tgW4JaucShOYLAxb@cluster0-shard-00-00-g7yx7.mongodb.net:27017,cluster0-shard-00-01-g7yx7.mongodb.net:27017,cluster0-shard-00-02-g7yx7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
// mongoose.connect('mongodb://localhost/hacktivoverflow')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sign);
app.use('/users', users);
app.use('/threads', threads);
app.use('/answers', answers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
