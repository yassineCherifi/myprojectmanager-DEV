# Sprint 1

Taks list :

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US01 | In a folder called "app/back",initialize a nodejs project and install dependencies (expressjs, mongoose, body-parser, passeport, passeport-local,jsonwebtoken), create config file in "./config/config.js" that contains server ports and database ports for both developement and production mode and run the server (app.js) on the URI "localhost:3002" for developement and "localhost:80" for production then create a "dockerfile" in "./app/back" to make the server in a docker container, create "docker-compose.yml" in "./app" then specify the service "back" on the port "3000:80" and the image of mongo database on the port "27017:27017" | 0.5 | CHERIFI | DONE |
| US01 | Create the folder "models" and create inside this folder mongoose schema "user.js" that represents the user(id,name,email,password,saltSecret) and Create database.js file to connect to mongo database on the URI "mongodb://localhost:27017" | 0.5 | CHERIFI | DONE |
| US01 | Create a folder called "routes" and create inside this folder a middleware "index.js" and put the route "/register" that receives a post request from the form in the view to create the user, use this middleware in "app.js" | 0.5 | CHERIFI | DONE |
| US01 | Create the folder "controllers" then put the function "register" in a file "user.controller.js" inside the controllers folder that receives a post request from the "/register" route ,validate the fields then inserting the user in the database | 0.5 | CHERIFI | DONE |
| US01 | Initialize an angular 8 project in the folder "./app/front",create the componenent register inside the folder "components" then create the form for registering | 0.5 | CHERIFI | DONE |
| US01 |Create the submit function "onSubmit() in register-component controller that checks the validity of fields and calls the function postUser() from the user service, create a "user.service.ts" in the folder "services" which contain the method postUser that receive a user and post it to route "/register" then getting the response from the route, inject this service to the register controller | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US02 | add the route "/login" in the middleware"./routes/index.router.js" that receives a post request from the login form | 0.5 | CHERIFI | DONE |
| US02 | Create the function "authenticate" in "./controllers/user.controller.js" that receives a post request from the "/login" route and checks if the user exists then genrating and returning a web token, then Add the method login to user.service.ts that receives informations and post them to route "/login" | 0.5 | CHERIFI | DONE |
| US02 | Create the componenent login, Create the login form in the login-component view,Create the submit function in login-component controller that checks the validity of fields and calls the function login from the user service then saving the token in local storage and redirecting to the dashboard page | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US03 | Add the button logout in the dahsboard-component view that calls the method logout of the dahsboard controller which will call the method removeToken in the user.service.js and redirecting to the login page,Add the method removeToken to "./services/user.service.ts" that removes the token from the local storage | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US05 | Create mongoose schema that represents the project(id,title,description,creator,contributors[],status,issues[],tasks[],sprints[]), Create a middleware "./routes/projects.router.js" and use it in "app.js" by specifing the route "/project" to that middleware, add the routes ( post: "/" to create ),( edit: "/:id" to update ),( delete: "/:id" to delte ),( get: "/" to get all projects ) | 0.5 | CHERIFI | DONE |
| US05 | Create the functions "getProjects,addProject,editProject,removeProject" in project.controller.js that receives a get/post/put/delete request from the project routes ,validate the fields for(inserting,updating) then get projects from the database or delete/put a project| 0.5 | CHERIFI | DONE |
| US05 | In agular project create project-components in "./components",Create the functions "getProjects,addProject,editProject,removeProject" in the project controller which will call the functions of project.services.ts | 0.5 | CHERIFI | DONE |
| US05 | in agular project add "./services/project.service.ts" which contains the methods "getProjects,addProject,editProject,removeProject" that receives informations from project-component-controllers and fetch the project routes | 0.5 | CHERIFI | DONE |


----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US09 | Create mongoose schema that represents the issue(id,description,priorite,difficulte,status),in the middleware "./routes/projects.router.js" add the routes ( post: "/:idProject/issues" to create ),( edit: "/:idProject/issues/:idIssue" to update ),( delete: "/:idProject/issues/:idIssues" to delete ) | 0.5 | MARTINEAU | DONE |
| US09 | Create the functions "getIssues,addIssue,editIssue,removeIssue" in project-detail.controller.js that receives a get/post/put/delete request from the issues routes ,validate the fields for(inserting,updating) then get issues from the database or delete/put an issue | 0.5 | MARTINEAU | DONE |  
| US09 | In agular project create detail-project-components then create a tab for issues in the view,Create the functions "getIssues,addIssue,editIssue,removeIssue" in the project-detail components controller which will call the functions of issues.services.ts | 0.5 | MARTINEAU | DONE | 
| US09 | In agular project add "./services/issue.service.ts" which contains the methods "getIssues,addIssue,editIssue,removeIssue" that receives informations from detail-project-component controller and fetch the issues routes | 0.5 | MARTINEAU | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US10 | Create mongoose schema that represents the sprint(title, start date, end date, status),in the middleware "./routes/projects.router.js" add the routes ( post: "/:idProject/sprint" to create ),( edit: "/:idProject/sprint/:idSprint" to update ),( delete: "/:idProject/sprint/:idSprint" to delete ) | 0.5 | | TODO |
| US10 | Create the functions "getSprints,addSprint,editSprint,removeSprint" in project-detail.controller.js that receives a get/post/put/delete request from the sprints routes ,validate the fields for(inserting,updating) then get sprints from the database or delete/put a sprint | 0.5 | | TODO |  
| US10 | In agular project in detail-project-components ,create a tab for sprints in the view,Create the functions "getSprints,addSprint,editSprint,removeSprint" in the project-detail components controller which will call the functions of sprints.services.ts | 0.5 | | TODO |  
| US10 | In agular project add "./services/sprint.service.ts" which contains the methods "getSprints,addSprint,editSprint,removeSprint" that receives informations from detail-project-component controller and fetch the sprints routes | 0.5 | | TODO | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US09/US16 | Create mongoose schema that represents the tasks(id,idIssues[],description,cost,developer),in the middleware "./routes/projects.router.js" add the routes ( post: "/:projectId/tasks" to create ),( edit: "/:projectId/tasks/:idTask" to update ),( delete: "/:projectId/tasks/:idTask" to delete ) | 0.5 | MARTINEAU  | TODO |  
| US09/US16 | Create the functions "getTasks,addITask,editTask,removeTask" in project-detail.controller.js that receives a get/post/put/delete request from the tasks routes ,validate the fields for(inserting,updating) then get tasks from the database or delete/put a task | 0.5 | MARTINEAU | TODO |  
| US09/US16 | In agular project in detail-project-component, create a tab for tasks in the view,Create the functions "getTasks,addITask,editTask,removeTask" in the project-detail components controller which will call the functions of tasks.service.ts | 0.5 | | TODO |  
| US09/US16 | In agular project add "./services/tasks.service.ts" which contains the methods "getTasks,addITask,editTask,removeTask" that receives informations from detail-project-component controller and fetch the tasks routes | 0.5 | | TODO | 
