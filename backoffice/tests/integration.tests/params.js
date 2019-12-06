const userName = 'TestName';
const userEmail = 'testemail@test.fr';
const userPassword = 'testtest';

const register_details = {
    'name': userName,
    'email': userEmail,
    'password': userPassword
};

const login_details = {
    'email': userEmail,
    'password': userPassword
};

const login_details_wrong = {
    'email': userEmail,
    'password': 'testtestwrong'
};

const project_details = {
    'title': 'ProjectTest',
    'description': 'ProjectDescription',
    'creator': ''
}

const issue_details = {
    'issueID': '47',
    'description': 'IssueDescription',
    'priorite': 'Moyenne',
    'difficulte': '2',
    'status': 'En cours'
};

const task_details = {
    'issues':[""],
    'description': 'desc',
    'cout': '0.5',
    'developer': 'DevTest'
};

const test_details = {
    'title': 'Title Test',
    'description': 'Test desc',
    'type': 'Unitaire',
    'date': '01/01/19',
    'link': 'TestLink',
    'status': 'Done'
};


const release_details = {
    'title': 'release1',
    'description': 'desc',
    'version': '3.0',
    'date': '21/05/2020',
    'sprintNumber': '5',
    'link' : 'Lien'
};

const sprint_details = {
    'title': 'SprintTest',
    'startDate': '01/01/19',
    'endDate': '15/01/19',
    'status': 'En cours'
};

const documentation_details = {
    'title': 'DocumentationTest',
    'description': 'DocDesc',
    'link' : 'LienDoc',
};


const loginHTTP = "/api/login";
const registerHTTP = "/api/register";
const dashboardHTTP = "/api/dashboard";
const projectsHTTP = "/api/projects";

module.exports = {
    register_details: register_details,
    login_details: login_details,
    login_details_wrong: login_details_wrong,
    project_details: project_details,
    issue_details: issue_details,
    task_details: task_details,
    test_details: test_details,
    release_details: release_details,
    sprint_details: sprint_details,
    documentation_details: documentation_details,
    loginHTTP: loginHTTP,
    registerHTTP: registerHTTP,
    dashboardHTTP: dashboardHTTP,
    projectsHTTP: projectsHTTP
};




