# Sprint 2

Taks list :

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US04 | Add a route to update user's infos | Add the route (edit : "/users/:id") to update a user, in the middleware index.router.js. | 0.5 | BOUYSSOU | TODO |
| US04 | Create the function getUser which returns a user and its infos and modifyUser which modify the actual user's infos | Create the functions "getUser, modifyUser" in user.controller.js which receives a get/put request from the index routes ,validate the fields for (inserting,updating) then put/get a user in/from the database. | 0.5 | BOUYSSOU |TODO |
| US04 | Create the component for the user's details : detailUser.component.html (which contains the fields of the user's infos to update : name, email, password), detailUser.component.ts and detailUser.componen.spec.ts | In angular, create the component "detailUser" in the dashboard. Create the functions "getuser,editUser" in detailuser.component.ts which calls the functions of user.service.ts | 0.5 | BOUYSSOU | TODO |
| US04 | In angular, add the methods "getuser,editUser" to user.service.ts | getUser return a user from a list of User, editUser changes the attributes of the user : name, email and password | 0.5 | BOUYSSOU | TODO |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Definition of Done |  Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US10 | Create mongoose schema that represents the sprint(title, startDate, endDate, status, issues[]), in the middleware "backoffice/routes/projects.router.js" add the routes (post: "/:idProject/sprints" to create),(put: "/:idProject/sprints/:idSprint" to update),(delete: "/:idProject/sprints/:idSprint" to delete ) | 0.5 | MARTINEAU | | DONE |
| US10 | Create the functions "getSprints, getStrint, createSprint, editSprint, deleteSprint" in sprint.controller.js that receives a get/post/put/delete request from the sprints routes ,validate the fields for (inserting,updating) then get sprints from the database or delete/put a sprint | 0.5 | MARTINEAU | | DONE |  
| US10 | In /frontoffice, create the component "sprint" and create the functions "getSprints, onSubmitSprint, updateModalEditSprint, onSubmitTEditSprint, removeSprint" in sprint.component.ts which will call the functions of sprint.services.ts | 0.5 | MARTINEAU | | DONE |  
| US10 | In /frontoffice, add "services/sprint.service.ts" which contains the methods "getSprints, getSprint, addSprint,editSprint,removeSprint" that receives informations from sprint.component.ts and fetch the sprints routes | 0.5 | MARTINEAU | | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US11, US14 | add the issues routes in the sprint routes to add and remove issues from a sprint | Create the routes (post : "/:idProject/sprints/:idSprint/issues" to add an issue), (put: "/:idProject/sprints/:idSprint/issues/:idIssue" to update), (delete: "/:idProject/sprints/:idSprint/issues/:idIssue" to delete )| 0.5 | CHERIFI | DONE | 
| US11, US14 | add methods to add issue and romove it from a sprint | Add a method "addIssuesToSprint, removeIssuesToSprint" to the details-project controller| 0.5 | CHERIFI | DONE | 
| US11, US14, US12 | add an input to add issues and a table to display them | In angular, in sprint-detail component view, add the select input  "Add issues to the sprint". Then, display a list of issues to select, the selection event will call onSubmit function which will call the method addIssues in the sprint service. add trash icone which will call the method removeIssues in the sprint service | 0.5 | CHERIFI | DONE | 
| US11, US14 | add method to add/remove issue in the sprint service | In angular, in "./services/sprint.service.ts", add the methods "addIssues,removeIssues"| 0.5 | CHERIFI | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |  Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US13 | add selection input in the view and the sort function in detail sprint controller| add select input in issue-component.html with 3 option ("ID,Priorité,Difficulté) above the issue list table,add click event to this input to call the function sort(option) in controller, add the function sort(option) in issue-component-controller that take the option and sort the list in term of this option | 0.5  | CHERIFI | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer |  Definition of Done | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US18 | Modify the Project schema to add the test[] list as a field | 0.5 | MARTINEAU | | DONE | 
| US18 | Create mongoose schema that represents the test(id,title,description,type,date,link,status), add the routes (post: "/:idProject/tests" to create), (put: /:idProject/tests/:idTest),(delete: /:idProject/tests/:idTest)| 0.5 | MARTINEAU | | DONE | 
| US18 | Create the functions "getTests,addTest,editTest,removeTest" in project-detail.controller.js that receives a get/post/put/delete request from the tests routes ,validate the fields for(inserting,updating) then get tests from the database or delete/put a test| 0.5 | MARTINEAU | | DONE | 
| US18 | In angular, create the functions "getTests,addTest,editTest,removeTest" in the detailproject components controller which will call the functions of tests.services.ts | 0.5 | MARTINEAU | | DONE | 
| US18 | In angular project add "./services/test.service.ts" which contains the methods "getTests,addTest,editTest,removeTest" that receives informations from detail-project-component controller and fetch the tests routes| 0.5 | MARITNEAU | | DONE | 
----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer |  Definition of Done | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US19 | Modify the Project schema to add the releases[] list as a field | 0.5 | | | TODO | 
| US19 | Create mongoose schema that represents the release(id,title,description,version,date,sprintNumber,link), add the routes (post: "/:idProject/releases" to create), (put: /:idProject/releases/:idRelease),(delete: /:idProject/releases/:idRelease)| 0.5 | | | TODO | 
| US19 | Create the functions "getReleases,addRelease,editRelease,removeRelease" in project-detail.controller.js that receives a get/post/put/delete request from the releases routes ,validate the fields for(inserting,updating) then get releases from the database or delete/put a release| 0.5 | | | TODO | 
| US19 | In angular, create the functions "getReleases,addRelease,editRelease,removeRelase" in the detailproject components controller which will call the functions of releases.services.ts | 0.5 | | | TODO | 
| US19 | In angular project add "./services/releases.service.ts" which contains the methods "getReleases,addRelease,editRelease,removeRelease" that receives informations from detail-project-component controller and fetch the releases routes| 0.5 | | | TODO | 
