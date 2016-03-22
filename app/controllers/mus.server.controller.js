var formidable = require('formidable'),
    fs = require('fs'),
    sizeOf = require('image-size'),
    url = require('url');

exports.create = function(req, res) {
    var form = formidable.IncomingForm();
    form.encode = 'utf-8';
    form.uploadDir = 'public/img/upload/';
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;

    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.json({ error: err });
        }

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
        // console.log(dimensions.width, dimensions.height);
        // console.log('form');
    });

    res.json({ success: true });
};

exports.down = function(req, res) {
    console.log(process.env.DIRNAME + '/public' + req.query.url);
    res.download(process.env.DIRNAME + '/public' + req.query.url);
};