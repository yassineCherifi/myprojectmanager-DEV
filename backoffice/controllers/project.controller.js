const mongoose = require('mongoose');
require('../models/project');
require('../models/issue');
require('../models/user');
require('../models/task');

const Project = mongoose.model('Project');
const Issue = mongoose.model('Issue');
const User = mongoose.model('User');
const Task = mongoose.model('Task');

module.exports.getAllProjects = (req, res, next) => {
    Project.find({})
        .populate('issues')
        .populate('creator')
        .populate('tasks')
        .exec(function (err, projects) {
            if (err) res.json({ error: "error" })
            res.json({ result: projects,idlogged : req._id })
        });
};

module.exports.getProjectDetails = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('issues')
        .populate('creator')
        .populate('tasks')
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
};

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
};

module.exports.deleteProject = (req, res, next) => {
    Project.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
        res.json({ success: "deleted with success" })
    });
};

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

};

module.exports.deleteIssue = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Issue.deleteOne({ _id: req.params.idIssue }, function (err, removed) {
            if (err) res.json({ error: "issue not removed" });
            project.issues.remove({ _id: req.params.idIssue });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "issue remove" })
            });
        });

    });
};

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


module.exports.createTask = (req, res, next) => {
    const task = new Task();
    task.idIssues = req.body.idIssues;
    task.description = req.body.description;
    task.cout = req.body.cout;
    task.developer = req.body.developer;
    task.save()
        .then((result) => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.tasks.push(task);
                    project.save();
                    res.json({ message: 'Task created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};



module.exports.deleteTask = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Task.deleteOne({ _id: req.params.idTask }, function (err, removed) {
            if (err) res.json({ error: "task not removed" });
            project.tasks.remove({ _id: req.params.idTask });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "task remove" })
            });
        });

    });
};

module.exports.editTask = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'tasks',
            match: { _id: req.params.idTask }
        })
        .then((result) => {
            result.tasks[0].idIssues = req.body.idIssues;
            result.tasks[0].description = req.body.description;
            result.tasks[0].cout = req.body.cout;
            result.tasks[0].developer = req.body.developer;
            result.tasks[0].save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "task edited" })
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};