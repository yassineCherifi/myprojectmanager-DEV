const mongoose = require('mongoose');
require('../models/project');
require('../models/sprint');
require('../models/issue');


const Project = mongoose.model('Project');
const Sprint = mongoose.model('Sprint');
const Issue = mongoose.model('Issue');


module.exports.getSprints = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate('sprints')
        .exec(function (err, project) {
            if (err) res.json({ error: 'error' });
            res.json({ sprints: project.sprints });
        });

};

module.exports.getSprint = (req, res) => {
    Sprint.findOne({ _id: req.params.idSprint })
        .populate('issues')
        .exec(function (err, sprint) {
            if (err) res.json({ error: 'error' });
            res.json({ sprint: sprint });
        });

};


module.exports.createSprint = (req, res) => {
    const sprint = new Sprint();
    sprint.title = req.body.title;
    sprint.startDate = req.body.dp1;
    sprint.endDate = req.body.dp2;
    sprint.status = req.body.status;
    sprint.save()
        .then(() => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.sprints.push(sprint);
                    project.save();
                    res.json({ message: 'Sprint created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.editSprint = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'sprints',
            match: { _id: req.params.idSprint }
        })
        .then((result) => {
            result.sprints[0].title = req.body.title;
            result.sprints[0].startDate = req.body.dp1;
            result.sprints[0].endDate = req.body.dp2;
            result.sprints[0].status = req.body.status;
            result.sprints[0].save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'sprint edited' });
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.deleteSprint = (req, res) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: 'no project found' });
        Sprint.deleteOne({ _id: req.params.idSprint }, function (err) {
            if (err) res.json({ error: 'Sprint not removed' });
            project.sprints.remove({ _id: req.params.idSprint });
            project.save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'Sprint removed' });
            });
        });

    });
};

module.exports.addIssueToSprint = (req, res) => {
    Sprint.findOne({ _id: req.params.idSprint }, (err, sprint) => {
        if (sprint) {
            Issue.findOne({ _id: req.body.idIssue }, (err, issue) => {
                if (issue) {
                    sprint.issues.push(issue);
                    sprint.save();
                    res.json({ message: 'Issue created in sprint!' });
                }
            });
        }
    })
        .catch((error) => {
            res.status(500).json({ error });
        });

};


module.exports.deleteIssueSprint = (req, res) => {
    Sprint.findOne({ _id: req.params.idSprint }, (err, sprint) => {
        if (sprint) {
            sprint.issues.remove({ _id: req.params.idIssue });
            sprint.save();
            res.json({ message: 'Issue deleted in sprint!' });
        }

    })
        .catch((error) => {
            res.status(500).json({ error });
        });
};
