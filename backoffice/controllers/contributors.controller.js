const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
require('../models/project');
require('../models/user');


const Project = mongoose.model('Project');
const User = mongoose.model('User');


module.exports.addContributor = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (project) {
            User.findOne({ email: req.body.email }, (err, user) => {
                if (user) {
                    project.contributors.push(user);
                    project.save();
                    res.json({ message: 'User asked to join the project!' });
                }
            });
        }
    })
        .catch((error) => {
            res.status(500).json({ error });
        });

};

module.exports.inviteContributor = (req, res, next) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'myprojectmanager.service@gmail.com',
          pass: 'password123**'
        }
      });

      var mailOptions = {
        from: 'myprojectmanager.service@gmail.com',
        // req.body.email
        to: 'yassine_cherifi@outlook.com',
        subject: '[MyProjectManager] Invitation to join project !',
        html: '<h4>Vous êtes invité à participer dans le projet, cliquer sur le lien suivant pour accepter l\'invitation :<h4>'+
        '<a href="https://www.google.com">Accepter l\'invitation</a>'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.json(error);
        } else {
          res.json({success: 'Email sent: ' + info.response});
        }
      });

};


module.exports.deleteContributor = (req, res, next) => {
    Project.findOne({ _id: req.params.id }, (err, project) => {
        if (project) {
            project.contributors.remove({ _id: req.params.idContributor });
            project.save();
            res.json({ message: 'User deleted from the project!' });
        }

    })
        .catch((error) => {
            res.status(500).json({ error });
        });
};
