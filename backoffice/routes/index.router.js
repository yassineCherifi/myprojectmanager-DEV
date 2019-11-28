const express = require('express');
const router = express.Router();
const userContr = require('../controllers/user.controller');
const contributorContr = require('../controllers/contributors.controller');

const jwtVerify = require('../config/jwt.verify');

router.post('/register', userContr.register);
router.post('/login', userContr.authenticate);
router.get('/logout', userContr.logout);
router.get('/users', jwtVerify.verifyJwtToken, userContr.getUsers);
router.put('/users/:idUser', userContr.modifyUser);

router.get('/dashboard', jwtVerify.verifyJwtToken, userContr.userDashboard);

// manage contributors
router.get('/:id/contributors/:invitation/:email', contributorContr.addContributor);

module.exports = router;
