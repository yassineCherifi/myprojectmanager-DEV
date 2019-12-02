# API Routes


## Users

The following routes are available from `/api/`

Route | Description | Authentication
----- | ----------- | --------------
**POST** /register | Register a new user | No
**POST** /login | Log in a user | No
**GET** /logout | Logout the current user | No
**GET** /users | Get the users list | Yes
**PUT** /users/:idUser | Modify a user from its id | Yes
**GET** /dashboard | Checks if user is logged and returns its info | Yes

## Project 

These routes are available from `/api/projects`


### Projects

Route | Description | Authentication
----- | ----------- | --------------
**GET** / | Get all projects | Yes
**GET** /:id | Get project detail by id | Yes
**POST** / | Create a new project | Yes
**DELETE** /:id | Delete a project from id | Yes
**PUT** /:id | Edit a project by id | Yes

### Issues

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/issues | Get all issues from project by project id | Yes
**POST** /:idProject/issues | Create a new issue in project of project id | Yes
**DELETE** /:idProject/issues/:idIssue | Delete an issue by id | Yes
**PUT** /:idProject/issues/:idIssue | Edit an issue by id | Yes

### Tasks

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/tasks | Get all tasks from project by project id | Yes
**POST** /:idProject/tasks | Create a new task in project of project id | Yes
**DELETE** /:idProject/tasks/:idTask | Delete a task by id | Yes
**PUT** /:idProject/tasks/:idTask| Edit a task by id | Yes

### Sprints

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/sprints | Get all sprints from project by project id | Yes
**GET** /:idProject/sprints/:idSprint | Get a sprint by id | Yes
**POST** /:idProject/sprints | Create a new sprint in project of project id | Yes
**DELETE** /:idProject/sprints/:idSprint | Delete a sprint by id | Yes
**PUT** /:idProject/sprints/:idSprint| Edit a sprint by id | Yes
**POST** /:idProject/sprints/:idSprint/issues | Add an issue in sprint of idSprint | Yes
**DELETE** /:idProject/sprints/:idSprint/issues/:idIssue | Remove an issue from sprint of idSprint | Yes

### Tests

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/tests | Get all tests from project by project id | Yes
**POST** /:idProject/tests | Create a new test in project of project id | Yes
**DELETE** /:idProject/tests/:idTest | Delete a test by id | Yes
**PUT** /:idProject/tests/:idTest| Edit a test by id | Yes

### Releases

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/releases | Get all releases from project by project id | Yes
**POST** /:idProject/releases | Create a new release in project of project id | Yes
**DELETE** /:idProject/releases/:idRelease | Delete a release by id | Yes
**PUT** /:idProject/releases/:idRelease | Edit a release by id | Yes

### Documentations

Route | Description | Authentication
----- | ----------- | --------------
**GET** /:idProject/documentations | Get all documentations references from project by project id | Yes
**POST** /:idProject/documentations | Create a new documentation reference in project of project id | Yes
**DELETE** /:idProject/documentations/:idDocumentation | Delete a documentation reference by id | Yes
**PUT** /:idProject/documentations/:idDocumentation| Edit a documentation reference by id | Yes

### Contributors

Route | Description | Authentication
----- | ----------- | --------------
**POST** /:idProject/invite | Invite a contributor to project of idProject | Yes
**GET** /:idProject/invitations/ | Get all invitations of project of idProject | Yes
**DELETE** /:idProject/contributors/:idContributor | Remove a contributor of idContributor from project of idProject | Yes




