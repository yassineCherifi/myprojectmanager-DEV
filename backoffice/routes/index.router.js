const express = require('express');
const router = express.Router();
const userContr = require('../controllers/user.controller');
const jwtVerify = require('../config/jwt.verify') 

router.post('/register',userContr.register);
router.post('/login',userContr.authenticate);
router.get('/logout',userContr.logout);
router.get('/users',jwtVerify.verifyJwtToken,userContr.getUsers);

router.get('/dashboard',jwtVerify.verifyJwtToken ,userContr.userDashboard);


module.exports = router;