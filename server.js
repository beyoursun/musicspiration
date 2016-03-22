process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.DIRNAME = __dirname;

var db = require('./config/mongoose')();
var express = require('./config/express');
var passport = require('./config/passport');

var app = express();

passport();

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');
