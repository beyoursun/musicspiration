var formidable = require('formidable'),
    fs = require('fs');

exports.create = function(req, res) {
    var form = formidable.IncomingForm();
    form.encode = 'utf-8';
    form.uploadDir = 'public/img/upload/';
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;

    form.parse(req, function(err, fields, files) {
        console.log(err);
        
        if (err) {
            return res.json({ error: err });
        }
        
        console.log('form');
        console.log(fields);
        console.log(files);
    });

    console.log('body');
    console.log(req.body);
};