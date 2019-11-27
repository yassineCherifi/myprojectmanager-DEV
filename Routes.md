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
