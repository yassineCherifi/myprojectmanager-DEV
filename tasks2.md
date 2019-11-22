# Sprint 2

Taks list :

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US04 | Add a route to update user's infos | Add the route (edit : "/users/:id") to update a user, in the middleware index.router.js. | 0.5 | BOUYSSOU | DONE |
| US04 | Create the function getUser which returns a user and its infos and modifyUser which modify the actual user's infos | Create the functions "getUser, modifyUser" in user.controller.js which receive a get/put request from the index routes ,validate the fields for (inserting,updating) then put/get a user in/from the database. | 0.5 | BOUYSSOU |ON GOING |
| US04 | Create the component for the user's details : detailUser.component.html (which contains the fields of the user's infos to update : name, email, password), detailUser.component.ts and detailUser.componen.spec.ts | In angular, create the component "detailUser" in the dashboard. Create the functions "getuser,editUser" in detailuser.component.ts which calls the functions of user.service.ts | 0.5 | BOUYSSOU | ON GOING |
| US04 | In angular, add the methods "getuser,editUser" to user.service.ts | getUser return a user from a list of User, editUser changes the attributes of the user : name, email and password | 0.5 | BOUYSSOU | ON GOING |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US10 | Create the mongoose schema that represents the sprint. Add the corresponding routes in /backoffice. | The schema Sprint(title, startDate, endDate, status, issues[]) is defined in "backoffice/models/sprint.js". In the middleware "backoffice/routes/projects.router.js", the routes post("/:idProject/sprints"), put("/:idProject/sprints/:idSprint") and delete("/:idProject/sprints/:idSprint") have been added | 0.5 | MARTINEAU | DONE |
| US10 | Create the functions that receive a get/post/put/delete request from the sprints routes, validate the fields for inserting/updating then get sprints from the database or delete/put a sprint | The functions "getSprints, getStrint, createSprint, editSprint, deleteSprint" have been added to sprint.controller.js | 0.5 | MARTINEAU | DONE |  
| US10 | In /frontoffice, create the component "sprint" and create the functions which manage sprints using the sprint service | In /frontoffice, there is a "components/dashboard/detailproject/sprint" directory with the sprint.component.html and sprint.component.ts files. The sprint.component.ts file contains the methods "getSprints, onSubmitSprint, updateModalEditSprint, onSubmitTEditSprint, removeSprint" which call the functions of sprint.services.ts | 0.5 | MARTINEAU | DONE |  
| US10 | In /frontoffice, create the sprint service | The file "services/sprint.service.ts" has been created and contains the methods "getSprints, getSprint, addSprint,editSprint,removeSprint" which receive information from sprint.component.ts and fetch the sprints routes. | 0.5 | MARTINEAU | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US11, US14 | Add the issues routes in the sprint routes to add and remove issues from a sprint | The routes post("/:idProject/sprints/:idSprint/issues"), put("/:idProject/sprints/:idSprint/issues/:idIssue") and delete("/:idProject/sprints/:idSprint/issues/:idIssue") have been added | 0.5 | CHERIFI | DONE | 
| US11, US14 | Add methods to add issue and remove it from a sprint | The methods "onAdd, removeIssueFromSprint, onSubmitEditIssue, updateModalEditIssue" have been added to detailsprint.component.ts | 0.5 | CHERIFI | DONE | 
| US11, US14, US12 | Add an input to add issues and a table to display them | In detailsprint.component.html, the select input "Add issues to the sprint" has been added. When adding an issue, a list of issues is displayed and after clicking, the issue is added to the sprint. The selection event calls the onAdd() function which calls the method addIssueSprint() in the sprint service. On the "detailsprint.component.html" view , clicking on the trash icon deletes the corresponding issue by calling the method removeIssue() in the sprint service. | 0.5 | CHERIFI | DONE | 
| US11, US14 | Add a method to add/remove an issue in the sprint service | In "./services/sprint.service.ts", the methods "addIssueSprint,removeIssue" have been added.| 0.5 | CHERIFI | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |  Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US13 | Add a selection input in detailsprint.component.html and the sort function in detailsprint.component.ts | A select input has been added in issue.component.html with 3 options ("ID,Priorité,Difficulté) above the issue list table. On selecting an option, the issues are sorted. A click event is linked to this input and calls the function sort(option) in the controller. The function sort(option) has been added in issue.component.ts and takes the option then sort the list according to this option | 0.5 | CHERIFI | DONE | 

----------------------------------------------------------------------------------------------------------------------


| ID_issue | task_description |  Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US18 | Modify the Project schema to add the test[] list as a field | The projectSchema in the /backoffice/models/project.js contains a field "tests". The database is starting without any issues.| 0.5 | MARTINEAU | DONE | 
| US18 | Create the mongoose schema that represents the test. Add the corresponding routes in /backoffice.| The schema Test(title,description,type,date,link,status) is defined in "backoffice/models/test.js". In the middleware "backoffice/routes/projects.router.js", the routes post("/:idProject/tests"), put("/:idProject/tests/:idTest") and delete("/:idProject/tests/:idTest") have been added. | 0.5 | MARTINEAU | DONE | 
| US18 | Create the functions that receive a get/post/put/delete request from the tests routes, validate the fields for insertion/update then get tests from the database or delete/put a test | The functions "getTests, createTest,editTest,deleteTest" have been created in test.controller.js | 0.5 | MARTINEAU | DONE | 
| US18 | In /frontoffice, create the component "test" and create the functions which manage tests using the test service | In /frontoffice, the functions "getTests,onSubmitTest,onSubmitEditTest, updateModalEditTest, removeTest" have been added in test.component.ts which call the functions of tests.service.ts | 0.5 | MARTINEAU | DONE | 
| US18 | In /frontoffice, generate the "test" service.| The file "services/tests.service.ts" has been created and contains the methods "getTests,addTest,editTest,removeTest" that receive informations from test.component.ts and fetch the tests routes.| 0.5 | MARTINEAU | DONE | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description |  Definition of Done | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: | :-: |
| US19 | Modify the Project schema to add the releases[] list as a field | The projectSchema in the /backoffice/models/project.js contains a field "releases". The database is starting without any issues. | 0.5 | BOUYSSOU | DONE | 
| US19 | Create the mongoose schema that represents the release. Add the corresponding routes in /backoffice. | The schema Release(title,description,version,date,sprintNumber,link) is defined in "backoffice/models/release.js". In the middleware "backoffice/routes/projects.router.js", the routes post("/:idProject/releases"), put("/:idProject/releases/:idRelease") and delete("/:idProject/releases/:idRelease") have been added. | 0.5 | BOUYSSOU | DONE | 
| US19 | Create the functions that receive a get/post/put/delete request from the releases routes, validate the fields for insertion/update then get releases from the database or delete/put a release. | The functions "getReleases, createRelease,editRelease, deleteRelease" have been created in release.controller.js | 0.5 | BOUYSSOU | DONE | 
| US19 |  In /frontoffice, create the component "release" and create the functions which manage releases using the release service | In "/frontoffice", the functions "getReleases, onSubmitRelease, onSubmitEditRelease, updateModalEditRelease, removeRelase" have been added in release.component.ts which call the functions of release.service.ts| 0.5 | BOUYSSOU | DONE | 
| US19 | In "/frontoffice", generate the "release" service. |  The file "services/releases.service.ts" has been created and contains the methods "getReleases,addRelease,editRelease,removeRelease" that receive informations from release.component.ts and fetch the releases routes.| 0.5 | BOUYSSOU | DONE | 
