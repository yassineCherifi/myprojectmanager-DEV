# Sprint 3

Taks list :

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US04 | Create the function getUser which returns a user and its infos and modifyUser which modify the actual user's infos | Create the functions "getUser, modifyUser" in user.controller.js which receive a get/put request from the index routes ,validate the fields for (inserting,updating) then put/get a user in/from the database. | 0.5 | BOUYSSOU |ON GOING |
| US04 | Create the component for the user's details : detailUser.component.html (which contains the fields of the user's infos to update : name, email, password), detailUser.component.ts and detailUser.componen.spec.ts | In angular, create the component "detailUser" in the dashboard. Create the functions "getuser,editUser" in detailuser.component.ts which calls the functions of user.service.ts | 0.5 | BOUYSSOU | DONE |
| US04 | In angular, add the methods "getuser,editUser" to user.service.ts | getUser return a user from a list of User, editUser changes the attributes of the user : name, email and password | 0.5 | BOUYSSOU | ON GOING |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US06 |  |  |  | |  |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US07 |  | | | |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US08 |  | | | |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US17 | Modify the user selection for the task creation to select users which are contributors. | The users[] list in "task.component.ts" is replaced by the contributors[] list. The function "getUSers" is replaced by "getContributors" which returns the list of contributors of the project.| 0.5 | | TODO |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US20 | Modify the Project schema to add the documentation[] list as a field | The projectSchema in the /backoffice/models/project.js contains a field "documentations". The database is starting without any issues.| 0.5 | BOUYSSOU | TODO |
| US20 | Create the mongoose schema that represents the documentation. Add the corresponding routes in /backoffice. | The schema Documentation(title,description,link) is defined in "backoffice/models/documentation.js". In the middleware "backoffice/routes/projects.router.js", the routes post("/:idProject/documentations"), put("/:idProject/documentations/:idDocumentation") and delete("/:idProject/documentations/:idDocumentation") have been added.| 0.5 | BOUYSSOU | TODO |
| US20 | Create the functions that receive a get/post/put/delete request from the documentations routes, validate the fields for insertion/update then get documentations from the database or delete/put a documentation | The functions "getDocumentations, createDocumentation,editDocumentation,deleteDocumentation" have been created in documentation.controller.js | 0.5 | BOUYSSOU | TODO |
| US20 | In /frontoffice, create the component "documentation" and create the functions which manage documentations using the documentation service | In /frontoffice, the functions "getDocumentations,onSubmitDocumentation ,onSubmitEditDocumentation, updateModalEditDocumentation, removeDocumentation" have been added in documentation.component.ts which call the functions of documentations.service.ts | 0.5 | BOUYSSOU | TODO |
| US20 | In /frontoffice, generate the "documentation" service. | The file "services/documentations.service.ts" has been created and contains the methods "getDocumentations,addDocumentation,editDocumentation,removeDocumentation" that receive informations from documentation.component.ts and fetch the documentations routes. | 0.5 | BOUYSSOU | DONE |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US21 |  | | | |
