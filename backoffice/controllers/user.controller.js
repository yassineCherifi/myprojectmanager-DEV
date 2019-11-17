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
        return;
    })
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(400).json(err);
        else
            if (user) {
                const token = user.generateJwt();
                res.cookie('token', token, { maxAge: 3600 * 60 * 1000,httpOnly: true});
                res.status(200).json({ "token": token });
                return;
            }
            else return res.status(404).json(info);
    })(req, res);
}

module.exports.logout = (req, res, next) => {
    res.clearCookie("token");
    res.status(200).json({success: "Logout with success !" });
}

module.exports.userDashboard = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user) return res.status(404).json({status: false, message: "Utilisateur non trouvé"})
        else return res.status(200).json({status: true , user: _.pick(user,['_id','name','email'])})
    });
}

module.exports.getUsers = (req, res, next) => {
    User.find({},'name email',(err, users) => {
        if (!users) return res.status(404).json({status: false, message: "Utilisateur non trouvé"})
        else return res.status(200).json({users:users});
    });
}

