const mongoose = require('mongoose');
require('../models/project');
require('../models/sprint');
const Project = mongoose.model('Project');
const Sprint = mongoose.model('Sprint');
module.exports.getSprints = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('sprints')
        .exec(function (err, project) {
            if (err) res.json({ error: "error" })
            res.json({ sprints: project.sprints })
        });

};

module.exports.createSprint = (req, res, next) => {
    const sprint = new Sprint();   
    sprint.title = req.body.title;
    sprint.startDate = req.body.dp1;
    sprint.endDate = req.body.dp2;
    sprint.status = req.body.status;
    sprint.issues = req.body.issues;
    sprint.save()
        .then((result) => {
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

module.exports.editSprint = (req, res, next) => {
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
            result.sprints[0].issues = req.body.issues;
            result.sprints[0].save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "sprint edited" })
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.deleteSprint = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Sprint.deleteOne({ _id: req.params.idSprint }, function (err, removed) {
            if (err) res.json({ error: "Sprint not removed" });
            project.sprints.remove({ _id: req.params.idSprint });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "Sprint removed" })
            });
        });

    });
};