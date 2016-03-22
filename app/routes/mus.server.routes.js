var mus = require('../controllers/mus.server.controller.js');

module.exports = function (app) {
    app.route('/api/mus')
        .post(mus.create);
        
    app.get('/mus/down', mus.down);
};