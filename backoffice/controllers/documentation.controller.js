const mongoose = require('mongoose');
require('../models/project');
require('../models/documentation');
const Project = mongoose.model('Project');
const Documentation = mongoose.model('Documentation');

/**
 * Get the documentation list from the project.
 */
module.exports.getDocumentations = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate('documentations')
        .exec(function (err, project) {
            if (err) res.json({ error: 'error' });
            res.json({ documentations: project.documentations });
        });
};

/**
 * Create a documentation reference for the project.
 */
module.exports.createDocumentation = (req, res) => {
    const documentation = new Documentation();
    documentation.title = req.body.title;
    documentation.description = req.body.description;
    documentation.link = req.body.link;
    documentation.save()
        .then(() => {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if (project) {
                    project.documentations.push(documentation);
                    project.save();
                    res.json({ message: 'documentation created!' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/**
 * Edit a documentation reference of the project.
 */
module.exports.editDocumentation = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .populate({
            path: 'documentations',
            match: { _id: req.params.idDocumentation }
        })
        .then((result) => {
            result.documentations[0].title = req.body.title;
            result.documentations[0].description = req.body.description;
            result.documentations[0].link = req.body.link;

            result.documentations[0].save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'documentation edited' });
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/**
 * Delete a documentation reference of the project.
 */
module.exports.deleteDocumentation = (req, res) => {
    Project.findOne({ _id: req.params.id }, function (err, project) {
        if (err) res.json({ error: 'no project found' });
        Documentation.deleteOne({ _id: req.params.idDocumentation }, function (err) {
            if (err) res.json({ error: 'documentation not removed' });
            project.documentations.remove({ _id: req.params.idDocumentation });
            project.save(function (err) {
                if (err) res.json({ error: 'error' });
                res.json({ success: 'documentation removed' });
            });
        });
    });
};
