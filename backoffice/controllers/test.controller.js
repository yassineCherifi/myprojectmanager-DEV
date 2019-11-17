const mongoose = require('mongoose');
require('../models/project');
require('../models/test');
const Project = mongoose.model('Project');
const Test = mongoose.model('Test');

module.exports.getTests = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('tests')
        .exec(function (err, project) {
            if (err) res.json({ error: "error" })
            res.json({ tests: project.tests })
        });

};

module.exports.createTest = (req, res, next) => {
    const test = new Test();
    test.title = req.body.title;
    test.description = req.body.description;
    test.type = req.body.type;
    test.date = req.body.dp;
    test.link = req.body.Lien;
    test.status = req.body.status;
    test.save()
        .then((result) => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.tests.push(test);
                    project.save();
                    res.json({ message: 'Test created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.editTest = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'tests',
            match: { _id: req.params.idTest }
        })
        .then((result) => {
            result.tests[0].idIssues = req.body.idIssues;
            result.tests[0].description = req.body.description;
            result.tests[0].cout = req.body.cout;
            result.tests[0].developer = req.body.developer;
            result.tests[0].save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "test edited" })
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.deleteTest = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Test.deleteOne({ _id: req.params.idTest }, function (err, removed) {
            if (err) res.json({ error: "test not removed" });
            project.tests.remove({ _id: req.params.idTest });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "test removed" })
            });
        });

    });
};
