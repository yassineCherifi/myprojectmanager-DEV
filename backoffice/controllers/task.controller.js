const mongoose = require('mongoose');
require('../models/project');
require('../models/task');
const Project = mongoose.model('Project');
const Task = mongoose.model('Task');

module.exports.getTasks = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('tasks')
        .exec(function (err, project) {
            if (err) res.json({ error: "error" })
            res.json({ tasks: project.tasks })
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

module.exports.deleteTask = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Task.deleteOne({ _id: req.params.idTask }, function (err, removed) {
            if (err) res.json({ error: "task not removed" });
            project.tasks.remove({ _id: req.params.idTask });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "task removed" })
            });
        });

    });
};