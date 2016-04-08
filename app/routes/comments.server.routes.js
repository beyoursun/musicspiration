var comments = require('../controllers/comments.server.controller.js'),
    users = require('../controllers/users.server.controller.js');
    
module.exports = function(app) {
    app.route('/api/comments')
        .post(users.requiresLogin, comments.create);
};