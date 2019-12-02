const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ACCEPT_URL = process.env.ACCEPT_URL || 'http://localhost:3002/api/';

require('../models/project');
require('../models/user');
require('../models/invitation');

const Project = mongoose.model('Project');
const User = mongoose.model('User');
const Invitation = mongoose.model('Invitation');

/**
 * Get the invitation list from the project.
 */
module.exports.getInvitations = (req, res) => {
    Invitation.find({ project: req.params.id })
        .exec(function (err, invitations) {
            if (err) { res.json({ err: 'Aucun projet trouvé !' }); }
            if (!invitations) { res.json({ error: 'Aucune invitations dans ce projet!' }); }
            res.status(200).json(invitations);
        });

};

/**
 * Add a contributor to the project.
 */
module.exports.addContributor = (req, res) => {
    const invitation = req.params.invitation;
    const email = req.params.email;
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (project) {
            User.findOne({ email: email }, (err, user) => {
                if (user) {
                    project.contributors.push(user);
                    project.save();
                    Invitation.findOne({ _id: invitation }, (err, invitation) => {
                        if (!err) {
                            invitation.status = 1;
                            invitation.save();
                            res.send('<h3>Félicitations! Vous êtes contributeur dans le projet [' + project.title + ']!<h3>');
                        }
                    });
                }
            });
        }
    })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/**
 * Invite a contributor to the project.
 */
module.exports.inviteContributor = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'myprojectmanager.service@gmail.com',
            pass: 'password123**'
        }
    });
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (!project) res.status(404).json({ status: false, message: 'Projet non trouvé' });
        else {
            const invitation = new Invitation();
            invitation.emailUser = req.body.email;
            invitation.project = project;
            invitation.date = new Date().toLocaleDateString();
            invitation.save(function (err) {
                if (err) res.json({ error: 'Invitation non envoyée' });
                else {
                    const mailOptions = {
                        from: 'myprojectmanager.service@gmail.com',
                        to: req.body.email,
                        subject: '[MyProjectManager] Invitation to join project !',
                        html: '<h4>Vous êtes invité à participer dans le projet [' + project.title + '], cliquer sur le lien suivant pour accepter l\'invitation :<h4>' +
                            '<a href="' + ACCEPT_URL + project._id + '/contributors/' + invitation._id + '/' + invitation.emailUser + '">Accepter l\'invitation</a>'
                    };
                    transporter.sendMail(mailOptions, function (error) {
                        if (error) {
                            res.json(error);
                        } else {
                            res.json({ success: 'L\'invitation a été envoyée avec succès' });
                        }
                    });
                }
            });
        }
    });
};

/**
 * Delete a contributor of the project.
 */
module.exports.deleteContributor = (req, res) => {
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (project) {
            project.contributors.remove({ _id: req.params.idContributor });
            project.save();
            User.findOne({ _id: req.params.idContributor }, (err, user) => {
                Invitation.remove({ emailUser: user.email, project: req.params.id }, function (err) {
                    if (!err) res.json({ message: 'User deleted from the project!' });
                });
            });
        }
    });
};
