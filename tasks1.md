# Sprint 1

Taks list :

| ID_issue | task_description |
| :-: | :-: |
| US01 | initialize a nodejs project and install dependencies (expressjs, mongoose, body-parser, passeport, passeport-local,jsonwebtoken)|
| US01 | Create the server expressjs and configure it |
| US01 | Create mongoose schema that represents the user  |
| US01 | Create database.js file to connect to mongo database  |
| US01 | Create the route register that receives a post request from the form to create the user |
| US01 | Create the function "register" in user.controller.js that receives a post request from the register route ,validate the fields then inserting the user in the database |
| US01 | initialize an angular 8 project |
| US01 | create a user.service.ts which contain the method postUser that receive a user and post it to route "register" |
| US01 | Create the componenent register |
| US01 | Create the registration form in the register-component view |
| US01 | Create the submit function in register-component controller that checks the validity of fields and calls the function postUser from the user service |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US02 | Create the route login that receives a post request from the login form |
| US02 | Create the function "authenticate" in user.controller.js that receives a post request from the login route and checks if the user exists then genrating and returning a web token |
| US02 | add the method login to user.service.ts that receives informations and post them to route "login" |
| US02 | Create the componenent login |
| US02 | Create the login form in the login-component view |
| US02 | Create the submit function in login-component controller that checks the validity of fields and calls the function login from the user service then saving the token in local storage and redirecting to the dashboard page |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US03 | add the button logout in the dahsboard-component view that calls the method logout of the dahsboard controller which will call the method removeToken in the user.service.js and redirecting to the login page |
| US03 | add the method removeToken to user.service.ts that removes the token from the local storage |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US05 | Create the project routes that receives a get/post/put/delete request from the project-component controller|
| US05 | Create mongoose schema that represents the project(id,title,description,manager,members) |
| US05 | Create the functions "getProjects,addProject,editProject,removeProject" in project.controller.js that receives a get/post/put/delete request from the project routes ,validate the fields for(inserting,updating) then get projects from the database or delete/put a project|
| US05 | In agular project create project-components (list-project-component,add-project-component,update-project-component,delete-project-component) then creates the views of each components
| US05 | Create the functions "getProjects,addProject,editProject,removeProject" in the project corresponding components which will call the functions of project.services.ts
| US05 | In agular project add project.service.ts which contains the methods "getProjects,addProject,editProject,removeProject" that receives informations from project-component-controllers and fetch the project routes |


----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US09 | Create the issues routes that receives a get/post/put/delete request from the detail-project-component controller|
| US09 | Create mongoose schema that represents the issue(id,description,priority,sprintNumber,status) |
| US09 | Create the functions "getIssues,addIssue,editIssue,removeIssue" in project-detail.controller.js that receives a get/post/put/delete request from the issues routes ,validate the fields for(inserting,updating) then get issues from the database or delete/put an issue|
| US09 | In agular project create detail-project-components then create a tab fo issues in the view
| US09 | Create the functions "getIssues,addIssue,editIssue,removeIssue" in the project-detail components controller which will call the functions of issue.services.ts
| US09 | In agular project add issue.service.ts which contains the methods "getIssues,addIssue,editIssue,removeIssue" that receives informations from detail-project-component controller and fetch the issues routes |

| ID_issue | Deleting issues, tasks, documentation...
| :-: | :-: |
| US09 - US16 - US18 - US19 - US20 |Create a delete button for all tabs (issues, tasks, sprints, release, documentation), on the same line of the item. When the user click on it, a confirmation pop-up shows on the screen with the message "Etes-vous sûr de vouloir supprimer "Item_Name". If the user clicks on "OK", the item is deleted from the project, if he clicks on "Cancel" the pop-up disappears.


| ID_issue | Updating issues, tasks, documentation...
| :-: | :-: |
| US09 - US16 - US18 - US19 - US20 |Create an update button for all tabs (issues, tasks, sprints, release, documentation), on the same line of the item. When the user click on it, a form with all the informations needed for the items shows on the screen, and the user can write the new values he wants for the item. He can then confirm the changes by clicking on "OK", or revert it by clicking on "Cancel".
