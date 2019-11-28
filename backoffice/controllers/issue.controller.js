const mongoose = require('mongoose');
require('../models/project');
require('../models/issue');
const Project = mongoose.model('Project');
const Issue = mongoose.model('Issue');

module.exports.getIssues = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate('issues')
        .exec(function (err, project) {
            if (err) res.json({ error: 'error' });
            res.json({ issues: project.issues });
        });

};

module.exports.createIssue = (req, res) => {
    const issue = new Issue();
    issue.issueID = req.body.issueID;
    issue.description = req.body.description;
    issue.priorite = req.body.priorite;
    issue.difficulte = req.body.difficulte;
    issue.status = req.body.status;
    issue.save()
        .then(() => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.issues.push(issue);
                    project.save();
                    res.json({ message: 'Issue created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });

};

module.exports.editIssue = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'issues',
            match: { _id: req.params.idIssue }
        })
        .then((result) => {
            result.issues[0].issueID = req.body.issueID;
            result.issues[0].description = req.body.description;
            result.issues[0].priorite = req.body.priorite;
            result.issues[0].difficulte = req.body.difficulte;
            result.issues[0].status = req.body.status;
            result.issues[0].save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'issue edited' });
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.deleteIssue = (req, res) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: 'no project found' });
        Issue.deleteOne({ _id: req.params.idIssue }, function (err) {
            if (err) res.json({ error: 'issue not removed' });
            project.issues.remove({ _id: req.params.idIssue });
            project.save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'issue removed' });
            });
        });

    });
};
