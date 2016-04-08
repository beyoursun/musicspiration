var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var indexServerRoutes = require('../app/routes/index.server.routes');
var userServerRoutes = require('../app/routes/user.server.routes');
var articlesServerRoutes = require('../app/routes/articles.server.routes');
var musServerRoutes = require('../app/routes/mus.server.routes');
var commentsServerRoutes = require('../app/routes/comments.server.routes');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // 配置会话
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // 配置视图系统
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    indexServerRoutes(app);
    userServerRoutes(app);
    articlesServerRoutes(app);
    musServerRoutes(app);
    commentsServerRoutes();

    // 静态文件服务
    app.use(express.static('./public'));

    return app;
};
