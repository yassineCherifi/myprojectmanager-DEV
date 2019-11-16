const express = require('express');
const router = express.Router();
const projContr = require('../controllers/project.controller');
const issueContr = require('../controllers/issue.controller');
const taskContr = require('../controllers/task.controller');
const sprintContr = require('../controllers/sprint.controller');
const testContr = require('../controllers/test.controller');

router.get('',projContr.getAllProjects);

router.get('/:id',projContr.getProjectDetails);
router.post('',projContr.insertProject);
router.delete('/:id',projContr.deleteProject);
router.put('/:id',projContr.editProject);

router.get('/:id/issues',issueContr.getIssues);
router.post('/:id/issues',issueContr.createIssue);
router.delete('/:id/issues/:idIssue',issueContr.deleteIssue);
router.put('/:id/issues/:idIssue',issueContr.editIssue);

router.get('/:id/tasks',taskContr.getTasks);
router.post('/:id/tasks',taskContr.createTask);
router.put('/:id/tasks/:idTask',taskContr.editTask);
router.delete('/:id/tasks/:idTask',taskContr.deleteTask);

router.get('/:id/sprints',sprintContr.getSprints);
router.get('/:id/sprints/:idSprint',sprintContr.getSprint);
router.post('/:id/sprints',sprintContr.createSprint);
router.post('/:id/sprints/:idSprint/issues',sprintContr.addIssueToSprint);
router.delete('/:id/sprints/:idSprint/issues/:idIssue',sprintContr.deleteIssueSprint);
router.put('/:id/sprints/:idSprint',sprintContr.editSprint);
router.delete('/:id/sprints/:idSprint', sprintContr.deleteSprint);


router.get('/:id/tests',testContr.getTests);
router.post('/:id/tests', testContr.createTest);
router.put('/:id/tests/:idTest',testContr.editTest);
router.delete('/:id/tests/:idTest',testContr.deleteTest);

module.exports = router;
