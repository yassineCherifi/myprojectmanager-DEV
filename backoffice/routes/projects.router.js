const express = require('express');
const router = express.Router();
const projContr = require('../controllers/project.controller');
const issueContr = require('../controllers/issue.controller');
const taskContr = require('../controllers/task.controller');
const sprintContr = require('../controllers/sprint.controller');
const testContr = require('../controllers/test.controller');
const releaseContr = require('../controllers/release.controller');
const documentationContr = require('../controllers/documentation.controller');
const contributorContr = require('../controllers/contributors.controller');


router.get('', projContr.getAllProjects);

router.get('/:id', projContr.getProjectDetails);
router.post('', projContr.insertProject);
router.delete('/:id', projContr.deleteProject);
router.put('/:id', projContr.editProject);

const issueRoute = '/:id/issues';
router.get(issueRoute, issueContr.getIssues);
router.post(issueRoute, issueContr.createIssue);
router.delete(issueRoute+'/:idIssue', issueContr.deleteIssue);
router.put(issueRoute+'/:idIssue', issueContr.editIssue);

const taskRoute = '/:id/tasks';
router.get(taskRoute, taskContr.getTasks);
router.post(taskRoute, taskContr.createTask);
router.put(taskRoute+'/:idTask', taskContr.editTask);
router.delete(taskRoute+'/:idTask', taskContr.deleteTask);

const sprintRoute = '/:id/sprints';
router.get(sprintRoute, sprintContr.getSprints);
router.get(sprintRoute+'/:idSprint', sprintContr.getSprint);
router.post(sprintRoute, sprintContr.createSprint);
router.post(sprintRoute+'/:idSprint/issues', sprintContr.addIssueToSprint);
router.delete(sprintRoute+'/:idSprint/issues/:idIssue', sprintContr.deleteIssueSprint);
router.put(sprintRoute+'/:idSprint', sprintContr.editSprint);
router.delete(sprintRoute+'/:idSprint', sprintContr.deleteSprint);

const testRoute = '/:id/tests';
router.get(testRoute, testContr.getTests);
router.post(testRoute, testContr.createTest);
router.put(testRoute+'/:idTest', testContr.editTest);
router.delete(testRoute+'/:idTest', testContr.deleteTest);

const releaseRoute = '/:id/releases';
router.get(releaseRoute, releaseContr.getReleases);
router.post(releaseRoute, releaseContr.createRelease);
router.put(releaseRoute+'/:idRelease', releaseContr.editRelease);
router.delete(releaseRoute+'/:idRelease', releaseContr.deleteRelease);

const docRoute = '/:id/documentations';
router.get(docRoute, documentationContr.getDocumentations);
router.post(docRoute, documentationContr.createDocumentation);
router.put(docRoute+'/:idDocumentation', documentationContr.editDocumentation);
router.delete(docRoute+'/:idDocumentation', documentationContr.deleteDocumentation);

router.delete('/:id/contributors/:idContributor', contributorContr.deleteContributor);
router.post('/:id/invite', contributorContr.inviteContributor);
router.get('/:id/invitations/', contributorContr.getInvitations);

module.exports = router;
