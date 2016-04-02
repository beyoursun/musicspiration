var mus = require('../controllers/mus.server.controller.js'),
    users = require('../controllers/users.server.controller.js');

module.exports = function(app) {
    app.route('/api/mus')
        .post(users.requiresLogin, mus.create);

	app.route('/api/mus/:muId')
		.get(mus.read)

	app.param('muId', mus.muById);

    app.get('/mus/down', mus.down);
};