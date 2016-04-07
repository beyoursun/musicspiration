var mus = require('../controllers/mus.server.controller.js'),
    users = require('../controllers/users.server.controller.js');

module.exports = function(app) {
    app.route('/api/mus')
        .post(users.requiresLogin, mus.create);

    app.put('/api/mus/updatePv', mus.updatePv); // pv统计
    
    app.put('/api/mus/updateLike', users.requiresLogin, mus.muByReqId, mus.updateLike); // 用户采集

    app.route('/api/mus/:muId')
        .get(mus.read);

    app.param('muId', mus.muById);

    app.get('/mus/down', mus.down);
};