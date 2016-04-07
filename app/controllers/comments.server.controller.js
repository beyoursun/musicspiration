var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment'),
    Mu = mongoose.model('Mu');

/**
 * @func getErrorMessage
 * @desc 获取错误信息
 * @param {object} err - 错误对象
 */
var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

/**
 * @func create
 * @desc 创建评论
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
exports.create = function(req, res) {
    var comment = new Comment({ content: req.body.content });
    comment.creator = req.user;
    comment.mu = req.mu;
    comment.save(function (err) {
        if (err) {
            return res.status(400).json({
                message: getErrorMessage(err)
            });
        } else {
            return res.json(comment);
        }
    });
};