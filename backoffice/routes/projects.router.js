const express = require('express');
const router = express.Router();
const projContr = require('../controllers/project.controller');

router.get('',projContr.getAllProjects);

router.get('/:id',projContr.getProjectDetails);
router.post('',projContr.insertProject);
router.delete('/:id',projContr.deleteProject);
router.put('/:id',projContr.editProject);
router.post('/:id/issues',projContr.createIssue);
router.delete('/:id/issues/:idIssue',projContr.deleteIssue);
router.put('/:id/issues/:idIssue',projContr.editIssue);

module.exports = router;