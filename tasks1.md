# Sprint 1

Taks list :

| ID_issue | task_description | cost (day) | Developer |
| :-: | :-: | :-: | :-: |
| US01 | Initialize a nodejs project and install dependencies (expressjs, mongoose, body-parser, passeport, passeport-local,jsonwebtoken) and run the server (app.js) on the URI "localhost:3002" | 0.5 | CHERIFI |
| US01 | Create the folder "models" and create inside this folder mongoose schema "user.js" that represents the user and Create database.js file to connect to mongo database on the URI "mongodb://localhost:27017" | 0.5 | CHERIFI |
| US01 | Create a folder called "routes" and create inside this folder a middleware "index.js" and put the route "/register" that receives a post request from the form in the view to create the user, use this middleware in "app.js" | 0.5 | CHERIFI |
| US01 | Create the folder "controllers" then put the function "register" in a file "user.controller.js" inside the controllers folder that receives a post request from the "/register" route ,validate the fields then inserting the user in the database | 0.5 | CHERIFI |
| US01 | Initialize an angular 8 project,create the componenent register inside the folder "components" then create the form for registering | 0.5 | CHERIFI |
| US01 |Create the submit function "onSubmit() in register-component controller that checks the validity of fields and calls the function postUser() from the user service, create a "user.service.ts" in the folder "services" which contain the method postUser that receive a user and post it to route "/register" then getting the response from the route, inject this service to the register controller | 0.5 | CHERIFI |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer |
| :-: | :-: | :-: | :-: |
| US02 | add the route "/login" in the middleware"./routes/index.router.js" that receives a post request from the login form | 0.5 | CHERIFI |
| US02 | Create the function "authenticate" in "./controllers/user.controller.js" that receives a post request from the "/login" route and checks if the user exists then genrating and returning a web token, then Add the method login to user.service.ts that receives informations and post them to route "/login" | 0.5 | CHERIFI |
| US02 | Create the componenent login, Create the login form in the login-component view,Create the submit function in login-component controller that checks the validity of fields and calls the function login from the user service then saving the token in local storage and redirecting to the dashboard page | 0.5 | CHERIFI |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer |
| :-: | :-: | :-: | :-: |
| US03 | Add the button logout in the dahsboard-component view that calls the method logout of the dahsboard controller which will call the method removeToken in the user.service.js and redirecting to the login page,Add the method removeToken to "./services/user.service.ts" that removes the token from the local storage | 0.5 | CHERIFI |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer |
| :-: | :-: | :-: | :-: |
| US05 | Create mongoose schema that represents the project(id,title,description,manager,members), Create a middleware "./routes/projects.router.js" and use it in "app.js" by specifing the route "/project" to that middleware, add the routes ( post: "/" to create ),( edit: "/:id" to update ),( delete: "/:id" to delte ),( get: "/" to get all projects )| 0.5 |  |
| US05 | Create the functions "getProjects,addProject,editProject,removeProject" in project.controller.js that receives a get/post/put/delete request from the project routes ,validate the fields for(inserting,updating) then get projects from the database or delete/put a project| 0.5 |  |
| US05 | In agular project create project-components in "./components",Create the functions "getProjects,addProject,editProject,removeProject" in the project controller which will call the functions of project.services.ts | 0.5 |  |
| US05 | in agular project add "./services/project.service.ts" which contains the methods "getProjects,addProject,editProject,removeProject" that receives informations from project-component-controllers and fetch the project routes | 0.5 |  |


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
| US15 | Create a button "Tasks" on the issues component view |
| US15 | Create the functions "addTaskToIssue" on the issues component controller |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |
| :-: | :-: |
| US16 | Create a button "Tasks" on the issues component view |
| US16 | Create the functions "addTaskToIssue" on the issues component controller |
