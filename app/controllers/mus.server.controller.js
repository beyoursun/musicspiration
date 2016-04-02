var fs = require('fs'),
    formidable = require('formidable'),
    sizeOf = require('image-size'),
    objectAssign = require('object-assign'),
    mongoose = require('mongoose'),
    Mu = mongoose.model('Mu');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// 创建
exports.create = function(req, res) {
    var form = formidable.IncomingForm();
    form.encode = 'utf-8';
    form.uploadDir = 'public/upload/';
    form.keepExtensions = true;
    form.maxFieldsSize = 20 * 1024 * 1024; // 最大上传20M

    form.parse(req, function(err, fields, files) {
        if (err) return res.status(400).json({ message: getErrorMessage(err) });

        if (!files.cover) return res.status(400).json({ message: '请上传封面图' });

        var coverExtName = ''; // 后缀名

        switch (files.cover.type) {
            case 'image/pjpeg':
                coverExtName = 'jpg';
                break;
            case 'image/jpeg':
                coverExtName = 'jpg';
                break;
            case 'image/png':
                coverExtName = 'png';
                break;
            case 'image/x-png':
                coverExtName = 'png';
                break;
        }

        if (coverExtName.length == 0) {
            return res.json({ error: '封面只支持png和jpg格式图片' });
        }

        var dimensions = sizeOf(files.cover.path);
        var newPath = files.cover.path.split('.')[0] + '@' + dimensions.width + 'x' + dimensions.height + '.' + coverExtName;

        fs.renameSync(files.cover.path, newPath);

        // 存进数据库
        var data = objectAssign({}, fields, {
            cover: newPath.split('public')[1],
            src: files.src.path.split('public')[1]
        });

        var mu = new Mu(data);
        mu.creator = req.user;
        mu.save(function(err) {
            if (err) {
                return res.status(400).json({ message: getErrorMessage(err) });
            } else {
                return res.json(mu);
            }
        });
    });
};

// 通过id查找
exports.muById = function(req, res, next, id) {
    Mu.findById(id).populate('creator').exec(function(err, mu) {
        if (err) return next(err);
        if (!mu) return next(new Error('Failed to load mu ' + id));

        req.mu = mu;
        console.log(req.mu);
        next();
    });
};

// 查找
exports.read = function(req, res) {
    res.json(req.mu);
};

// 统计pv
exports.updatePv = function(req, res) {
    var id = req.body.id;
    Mu.findById(id, function(err, mu) {
        if (err) {
            res.status(400).json({
                message: getErrorMessage(err)
            });
        } else {
            mu.pv++;
            mu.save(function (err) {
                if (err) {
                    res.status(400).json({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.json(mu);
                }
            });
        }
    })
};

// 下载
exports.down = function(req, res) {
    res.download(process.env.DIRNAME + '/public' + req.query.url);
};