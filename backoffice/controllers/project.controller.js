const mongoose = require('mongoose');
require('../models/project');
require('../models/user');

const Project = mongoose.model('Project');
const User = mongoose.model('User');

module.exports.getAllProjects = (req, res, next) => {
    Project.find({})
        .populate('issues')
        .populate('creator')
        .populate('tasks')
        .populate('sprints')
        .exec(function (err, projects) {
            if (err) res.json({ error: "error" })
            res.json({ result: projects, idlogged: req._id })
        });
};

module.exports.getProjectDetails = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
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
