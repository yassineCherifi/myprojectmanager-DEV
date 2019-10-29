const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const _ = require('lodash');
module.exports.register = (req, res, next) => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code === 11000)
                res.status(442).send(['L\'émail déja existe !']);
            else
                return next(err);
        }
    })
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(400).json(err);
        else
            if (user) return res.status(200).json({ "token": user.generateJwt() });
            else return res.status(404).json(info);
    })(req, res);
}

module.exports.userDashboard = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user) return res.status(404).json({status: false, message: "Utilisateur non trouvé"})
        else return res.status(200).json({status: true , user: _.pick(user,['_id','name','email'])})
    });
}

