# Sprint 1

Taks list :

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US01 | In a folder called "./app/backoffice",initialize a nodejs project and install dependencies (expressjs, mongoose, body-parser, passeport, passeport-local,jsonwebtoken), create a config file in "/config/config.js" that contains server ports and database ports for both developement and production mode and run the server (app.js) on the URI "localhost:3002" for developement and "localhost:80" for production then create a "dockerfile" in "backoffice" to make the server in a docker container, create "docker-compose.yml" in "app" then specify the service "backoffice" on the port "3000:80" and the image of mongo database on the port "27017:27017". | 0.5 | CHERIFI | DONE |
| US01 | In "backoffice", create the folder "models" and create inside this folder the mongoose schema "user.js" that represents the user(name,email,password,saltSecret) and create a database.js file in a "database" folder to connect to mongo database on the URI "mongodb://localhost:27017". | 0.5 | CHERIFI | DONE |
| US01 | Create a folder called "routes" and create inside this folder a middleware "index.router.js" and put the route "/register" that receives a post request from the form in the view to create the user, use this middleware in "app.js". | 0.5 | CHERIFI | DONE |
| US01 | Create the folder "controllers" then put the function "register" in a file "user.controller.js" inside the controllers folder that receives a post request from the "/register" route ,validate the fields then inserting the user in the database. | 0.5 | CHERIFI | DONE |
| US01 | Initialize an angular 8 project in the folder "./app/frontoffice",create the componenent register inside the folder "components" then create the form for registering. | 0.5 | CHERIFI | DONE |
| US01 | Create the submit function "onSubmit() in register.component.ts that checks the validity of fields and calls the function postUser() from the user service, create a "user.service.ts" in the folder "frontoffice/services" which contain the method postUser that receive a user and post it to route "/register" then getting the response from the route, inject this service to the register controller. | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US02 | Add the route "/login" in the middleware"./app/backoffice/routes/index.router.js" that receives a post request from the login form. | 0.5 | CHERIFI | DONE |
| US02 | Create the function "authenticate" in "./app/backoffice/controllers/user.controller.js" that receives a post request from the "/login" route and checks if the user exists then generating and returning a web token, then add the method login() to fronoffice/services/user.service.ts that receives informations and post them to route "/login". | 0.5 | CHERIFI | DONE |
| US02 | Create the login component, create the login form in login-component.html, create the submit function in login.component.ts that checks the validity of fields and calls the function login() from the user service then saving the token in local storage and redirecting to the dashboard page. | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US03 | Add the logout button in the dashboard.component.html that calls the method logout of the dashboard.component.ts which will call the method removeToken in the user.service.js and redirecting to the login page, add the method removeToken to "./services/user.service.ts" that removes the token from the local storage. | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US05 | Create the mongoose schema that represents the project(id,title,description,creator,contributors[],status,issues[],tasks[],sprints[]), Create a middleware "./app/backoffice/routes/projects.router.js" and use it in "app.js" by specifing the route "/project" to that middleware, add the routes (post: "/" to create),(put: "/:id" to update),(delete: "/:id" to delete),(get: "/" to get all projects). | 0.5 | CHERIFI | DONE |
| US05 | Create the functions "getAllProjects,insertProject,editProject,deleteProject" in project.controller.js that receives a get/post/put/delete request from the project routes, validate the fields for(inserting,updating) then get projects from the database or delete/put a project. | 0.5 | CHERIFI | DONE |
| US05 | In "frontoffice", create a "listprojets" component, create the functions "getProjects,removeProject" in the project controller which will call the functions of project.services.ts | 0.5 | CHERIFI | DONE |
| US05 | In "frontoffice", add the service project.service.ts" which contains the methods "getProjects, getProject, addProject,editProject,deleteProject" that receives informations from listprojets.component.ts (and detailprojet.component.ts) and fetch the /projects routes. | 0.5 | CHERIFI | DONE |


----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US09 | Create the mongoose schema that represents the issue(issueID,description,priorite,difficulte,status) in projects.router.js, add the routes (post: "/:idProject/issues" to create),(put: "/:idProject/issues/:idIssue" to update),( delete: "/:idProject/issues/:idIssues" to delete ) | 0.5 | MARTINEAU | DONE |
| US09 | Create the functions "getIssues,addIssue,editIssue,removeIssue" in issue.controller.js that receives a get/post/put/delete request from the issues routes ,validate the fields for(inserting,updating) then get issues from the database or delete/put an issue | 0.5 | MARTINEAU | DONE |  
| US09 | In "frontoffice" create a detailprojet component, then create a tab for issues in the view, create the functions "getIssues,addIssue,editIssue,removeIssue" in detailprojet.component.ts which will call the functions of issues.services.ts | 0.5 | MARTINEAU | DONE | 
| US09 | In agular project add "./services/issue.service.ts" which contains the methods "getIssues,addIssue,editIssue,removeIssue" that receives informations from detailprojet.component.ts and fetch the /issues routes. | 0.5 | MARTINEAU | DONE |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US10 | Create the mongoose schema that represents the sprint(title, startDate, endDate, status),then add the routes (post: "/:idProject/sprints" to create),(put: "/:idProject/sprints/:idSprint" to update),(delete: "/:idProject/sprints/:idSprint" to delete) | 0.5 | | TODO |
| US10 | Create the functions "createSprint,editSprint,deleteSprint" in sprint.controller.js that receives a get/post/put/delete request from the sprints routes ,validate the fields for(inserting,updating) then get sprints from the database or delete/put a sprint | 0.5 | | TODO |  
| US10 | In "detailprojet.component.html", create a tab for sprints in the view, create the functions "getSprints,removeSprint" in "detailprojet.component.ts" which will call the functions of sprint.service.ts | 0.5 | | TODO |  
| US10 | Add the service "sprint.service.ts" which contains the methods "getSprints,addSprint,editSprint,removeSprint" that receives informations from detailprojet.component.ts and fetch the /sprints routes | 0.5 | | TODO | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US09/US16 | Create the mongoose schema that represents the tasks(idIssues[],description,cout,developer),in "projects.router.js", add the routes (post: "/:projectId/tasks" to create ),(put: "/:projectId/tasks/:idTask" to update),( delete: "/:projectId/tasks/:idTask" to delete ) | 0.5 | MARTINEAU | DONE |  
| US09/US16 | Create the functions "getTasks,addITask,editTask,removeTask" in task.controller.js that receives a get/post/put/delete request from the tasks routes, validate the fields for(inserting,updating) then get tasks from the database or delete/put a task | 0.5 | MARTINEAU | DONE |  
| US09/US16 | In "detailprojet.component.html", create a tab for tasks in the view, create the functions "getTasks,addITask,editTask,removeTask" in the project-detail components controller which will call the functions of tasks.service.ts | 0.5 | MARTINEAU | DONE |  
| US09/US16 | In agular project add "./services/tasks.service.ts" which contains the methods "getTasks,addTask,editTask,removeTask" that receives informations from detailprojet.component.ts and fetch the /tasks routes | 0.5 | MARTINEAU | DONE | 
