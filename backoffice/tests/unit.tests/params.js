var userName = 'TestName';
var userEmail = 'testemail@test.fr';
var userPassword = 'testtest';

var register_details = {
    'name': userName,
    'email': userEmail,
    'password': userPassword
};

var login_details = {
    'email': userEmail,
    'password': userPassword
};

var login_details_wrong = {
    'email': userEmail,
    'password': 'testtestwrong'
};

var project_details = {
    'title': 'ProjectTest',
    'description': 'ProjectDescription',
    'creator': ''
}

var issue_details = {
    'issueID': '1',
    'description': 'IssueDescription',
    'priorite': 'Moyenne',
    'difficulte': '2',
    'status': 'En cours'
};

var loginHTTP = "/api/login";
var registerHTTP = "/api/register";
var dashboardHTTP = "/api/dashboard";
var projectsHTTP = "/api/projects";

module.exports = {
    register_details: register_details,
    login_details: login_details,
    login_details_wrong: login_details_wrong,
    project_details: project_details,
    issue_details: issue_details,
    loginHTTP: loginHTTP,
    registerHTTP: registerHTTP,
    dashboardHTTP: dashboardHTTP,
    projectsHTTP: projectsHTTP
};




