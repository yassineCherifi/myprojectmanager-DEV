const mongoose = require('mongoose');
require('../models/project');
require('../models/issue');
require('../models/user');

const Project = mongoose.model('Project');
const Issue = mongoose.model('Issue');
const User = mongoose.model('User');

module.exports.getAllProjects = (req, res, next) => {
    Project.find({})
        .populate('issues')
        .populate('creator')
        .exec(function (err, projects) {
            if (err) res.json({ error: "error" })
            res.json({ projects: projects })
        });
}

module.exports.getProjectDetails = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('issues')
        .populate('creator')
        .exec(function (err, project) {
            if (err) res.json({ error: "error" })
            res.json({ project: project })
        });

};

module.exports.insertProject = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user) return res.status(404).json({ status: false, message: "Utilisateur non trouvé" })
        else {
            const project = new Project();
            project.title = req.body.title;
            project.description = req.body.description;
            project.status = req.body.status;
            project.creator = user;
            project.save(function (err) {
                if (!err)
                    res.send(project);
            });
        }
    });
}

module.exports.editProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (!project) return res.status(404).json({ status: false, message: "Projet non trouvé" })
        else {
            project.title = req.body.title;
            project.description = req.body.description;
            project.status = req.body.status;
            project.save(function (err) {
                if (!err)
                    res.send({ success: "Updated with success" });
            });
        }
    });
}

module.exports.deleteProject = (req, res, next) => {
    Project.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
        res.json({ success: "deleted with success" })
    });
}

module.exports.createIssue = (req, res, next) => {
    const issue = new Issue();
    issue.description = req.body.description;
    issue.priorite = req.body.priorite;
    issue.difficulte = req.body.difficulte;
    issue.status = req.body.status;
    issue.save()
        .then((result) => {
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

}

module.exports.deleteIssue = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Issue.remove({ _id: req.params.idIssue }, function (err, removed) {
            if (err) res.json({ error: "issue not removed" });
            project.issues.remove({ _id: req.params.idIssue });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "issue remove" })
            });
        });

    });
}

module.exports.editIssue = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'issues',
            match: { _id: req.params.idIssue }
        })
        .then((result) => {
            result.issues[0].description = req.body.description;
            result.issues[0].priorite = req.body.priorite;
            result.issues[0].difficulte = req.body.difficulte;
            result.issues[0].status = req.body.status;
            result.issues[0].save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "issue edited" })
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};