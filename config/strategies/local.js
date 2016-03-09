var Passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	Passport.use(new LocalStrategy(function (username, password, done) {
		User.findOne({
			username: username
		}, function(err, user) {
			if (err) {
				return done(err);
			} else if (!user) {
				return done(null, false, {
					message: 'Unknown user'
				});
			} else if (!user.authenticate(password)) {
				return done(null, false, {
					message: 'Invalid password'
				});
			} else {
				return done(null, user);
			}
		});
	}));
};