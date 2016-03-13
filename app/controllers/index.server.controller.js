exports.render = function(req, res) {
	res.render('index', {
		title: 'Inspirationmu - 采集你的音乐与灵感',
		user: JSON.stringify(req.user)
	});
};