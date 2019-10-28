# Sprint 1

Taks list :

| ID_issue | task_description | | cost (day) | Developer |
| :-: | :-: | :-: | :-: |
| US01 | Initialize a nodejs project and install dependencies (expressjs, mongoose, body-parser, passeport, passeport-local,jsonwebtoken) and run the server on the URI "localhost:3002" | 0.5 | CHERIFI |
| US01 | Create the folder "models" and create inside this folder mongoose schema "user.js" that represents the user and Create database.js file to connect to mongo database on the URI "mongodb://localhost:27017" | 0.5 | CHERIFI |
| US01 | Create a folder called "routes" and create inside this folder a middleware "index.js" and put the route "/register" that receives a post request from the form in the view to create the user | 0.5 | CHERIFI |
| US01 | Create the folder "controllers" then put the function "register" in a file "user.controller.js" inside the controllers folder that receives a post request from the "/register" route ,validate the fields then inserting the user in the database | 0.5 | CHERIFI |
| US01 | Initialize an angular 8 project,create the componenent register inside the folder "components" then create the form for registering | 0.5 | CHERIFI |
| US01 | Create a user.service.ts which contain the method postUser that receive a user and post it to route "/register" then getting the response from the route | 0.5 | CHERIFI |
| US01 | Create the submit function "onSubmit() in register-component controller that checks the validity of fields and calls the function postUser() of the user service | 0.5 | CHERIFI |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US02 | Create the route login that receives a post request from the login form |
| US02 | Create the function "authenticate" in user.controller.js that receives a post request from the login route and checks if the user exists then genrating and returning a web token |
| US02 | Add the method login to user.service.ts that receives informations and post them to route "login" |
| US02 | Create the componenent login |
| US02 | Create the login form in the login-component view |
| US02 | Create the submit function in login-component controller that checks the validity of fields and calls the function login from the user service then saving the token in local storage and redirecting to the dashboard page |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US03 | Add the button logout in the dahsboard-component view that calls the method logout of the dahsboard controller which will call the method removeToken in the user.service.js and redirecting to the login page |
| US03 | Add the method removeToken to user.service.ts that removes the token from the local storage |

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
| US09 | In agular project create detail-project-components then create a tab for issues in the view
| US09 | Create the functions "getIssues,addIssue,editIssue,removeIssue" in the project-detail components controller which will call the functions of issue.services.ts
| US09 | In agular project add issue.service.ts which contains the methods "getIssues,addIssue,editIssue,removeIssue" that receives informations from detail-project-component controller and fetch the issues routes |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US10 | Create the sprint routes that receives a get/post/put/delete request from the detail-project-component controller|
| US10 | Create mongoose schema that represents the sprint(id,duration,tasks,status) |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description |
| :-: | :-: |
| US11 | Create the button "Add issue to the sprint" on the sprint component view |
| US11 | Create the form which lists the issues to add on the sprint component view |
| US11 | Create the function "addIssueToSprint" on the sprint component controller |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description |
| :-: | :-: |
| US12 | Create a search input on the sprint component view |
| US12 | Create the function "searchIssue" on the sprint component controller |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US13 | Create a dropdown button with a "Priority" item and a "Difficulty" item on the sprint component controller |
| US13 | Create the functions "orderByPriority, orderByDifficulty" on the sprint component controller |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description |
| :-: | :-: |
| US15 | Create a button "Tasks" on the issues component view |
| US15 | Create the functions "addTaskToIssue" on the issues component controller |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description |
| :-: | :-: |
| US17 | Create a button "Assign to contributor" on the sprint component view |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description |
| :-: | :-: |
| US09 - US14 - US16 - US18 - US19 - US20 |Create a delete button for all tabs (issues, tasks, sprints, release, documentation), on the same line of the item. When the user click on it, a confirmation pop-up shows on the screen with the message "Etes-vous sûr de vouloir supprimer "Item_Name". If the user clicks on "OK", the item is deleted from the project, if he clicks on "Cancel" the pop-up disappears.


| ID_issue | task_description |
| :-: | :-: |
| US09 - US16 - US18 - US19 - US20 |Create an update button for all tabs (issues, tasks, sprints, release, documentation), on the same line of the item. When the user click on it, a form with all the informations needed for the items shows on the screen, and the user can write the new values he wants for the item. He can then confirm the changes by clicking on "OK", or revert it by clicking on "Cancel".
