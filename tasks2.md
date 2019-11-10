# Sprint 2

Taks list :

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US04 | Add the route (edit : "/users/:id") to update a user, in the middleware index.router.js. | 0.5 | | TODO |
| US04 | Create the functions "getUser, modifyUser" in user.controller.js which receives a get/put request from the index routes ,validate the fields for (inserting,updating) then put/get a user in/from the database. | 0.5 | | TODO |
| US04 | In angular, create the component "detailUser". Create the functions "getuser,editUser" in detailuser.component.ts which calls the functions of user.service.ts| 0.5 | | TODO |
| US04 | In angular, add the methods "getuser,editUser" to user.service.ts| 0.5 | | TODO |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US10 | Create mongoose schema that represents the sprint(title, start date, end date, status, issues[]),in the middleware "./routes/projects.router.js" add the routes ( post: "/:idProject/sprint" to create ),( edit: "/:idProject/sprint/:idSprint" to update ),( delete: "/:idProject/sprint/:idSprint" to delete ) | 0.5 | | TODO |
| US10 | Create the functions "getSprints,addSprint,editSprint,removeSprint" in project-detail.controller.js that receives a get/post/put/delete request from the sprints routes ,validate the fields for(inserting,updating) then get sprints from the database or delete/put a sprint | 0.5 | | TODO |  
| US10 | In angular project in detail-project-components ,create a tab for sprints in the view,Create the functions "getSprints,addSprint,editSprint,removeSprint" in the project-detail components controller which will call the functions of sprints.services.ts | 0.5 | | TODO |  
| US10 | In angular project add "./services/sprint.service.ts" which contains the methods "getSprints,addSprint,editSprint,removeSprint" that receives informations from detail-project-component controller and fetch the sprints routes | 0.5 | | TODO | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US11, US14 | Create the routes (post : "/:idProject/sprint/:idSprint/issues" to add an issue), (edit: "/:idProject/sprint/:idSprint/issues/:idIssue" to update), ( delete: "/:idProject/sprint/:idSprint/issues/:idIssue" to delete )| 0.5 | | TODO | 
| US11, US14 | Add a method "addIssuesToSprint, removeIssuesToSprint" to the details-project controller| 0.5 | | TODO | 
| US11, US14 | In angular, in details-project component view, add the button "Add issues to the sprint". Then, display a list of issues to select and a submit button which calls onSubmit function. If a checkbox is unchecked, the issue is removed from the sprint | 0.5 | | TODO | 
| US11, US14 | In angular, in "./services/sprint.service.ts", add the methods "addIssues,removeIssues"| 0.5 | | TODO | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US13 | |  | | TODO | 

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US18 | Modify the Project schema to add the test[] list as a field | 0.5 | | TODO | 
| US18 | Create mongoose schema that represents the test(id,title,description,type,date,link,status), add the routes (post: "/:idProject/tests" to create), (edit: /:idProject/tests/:idTest),(delete: /:idProject/tests/:idTest)| 0.5 | | TODO | 
| US18 | Create the functions "getTests,addTest,editTest,removeTest" in project-detail.controller.js that receives a get/post/put/delete request from the tests routes ,validate the fields for(inserting,updating) then get tests from the database or delete/put a test| 0.5 | | TODO | 
| US18 | In angular, create the functions "getTests,addTest,editTest,removeTest" in the detailproject components controller which will call the functions of tests.services.ts | 0.5 | | TODO | 
| US18 | In angular project add "./services/test.service.ts" which contains the methods "getTests,addTest,editTest,removeTest" that receives informations from detail-project-component controller and fetch the tests routes| 0.5 | | TODO | 
----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | cost (day) | Developer | Status |
| :-: | :-: | :-: | :-: | :-: |
| US19 | Modify the Project schema to add the releases[] list as a field | 0.5 | | TODO | 
| US19 | Create mongoose schema that represents the release(id,title,description,version,date,sprintNumber,link), add the routes (post: "/:idProject/releases" to create), (edit: /:idProject/releases/:idRelease),(delete: /:idProject/releases/:idRelease)| 0.5 | | TODO | 
| US19 | Create the functions "getReleases,addRelease,editRelease,removeRelease" in project-detail.controller.js that receives a get/post/put/delete request from the releases routes ,validate the fields for(inserting,updating) then get releases from the database or delete/put a release| 0.5 | | TODO | 
| US19 | In angular, create the functions "getReleases,addRelease,editRelease,removeRelase" in the detailproject components controller which will call the functions of releases.services.ts | 0.5 | | TODO | 
| US19 | In angular project add "./services/releases.service.ts" which contains the methods "getReleases,addRelease,editRelease,removeRelease" that receives informations from detail-project-component controller and fetch the releases routes| 0.5 | | TODO | 
