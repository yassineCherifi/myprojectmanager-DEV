const mongoose = require('mongoose');
require('../models/project');
require('../models/release');
const Project = mongoose.model('Project');
const Release = mongoose.model('Release');

module.exports.getReleases = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate('releases')
        .exec(function (err, project) {
            if (err) res.json({ error: "error" })
            res.json({ releases: project.releases })
        });
};

module.exports.createRelease = (req, res, next) => {
    const release = new Release();
    release.title = req.body.title;
    release.description = req.body.description;
    release.version = req.body.version;
    release.date = req.body.date;
    release.link = req.body.link;
    release.sprintNumber = req.body.sprintNumber;
    release.save()
        .then((result) => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.releases.push(release);
                    project.save();
                    res.json({ message: 'release created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.editRelease = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'releases',
            match: { _id: req.params.idRelease }
        })
        .then((result) => {
            result.releases[0].title = req.body.title;
            result.releases[0].description = req.body.description;
            result.releases[0].version = req.body.version;
            result.releases[0].date = req.body.date;
            result.releases[0].sprintNumber = req.body.sprintNumber;
            result.releases[0].link = req.body.link;

            result.releases[0].save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "release edited" })
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

module.exports.deleteRelease = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: "no project found" })
        Release.deleteOne({ _id: req.params.idRelease }, function (err, removed) {
            if (err) res.json({ error: "release not removed" });
            project.releases.remove({ _id: req.params.idRelease });
            project.save(function (err) {
                if (err) res.json({ error: "error" });
                res.json({ success: "release removed" })
            });
        });

    });
};
