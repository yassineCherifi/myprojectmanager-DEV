# Sprint 3

Taks list :

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US04 | Create the function getUser which returns a user and its infos and modifyUser which modify the actual user's infos | Create the functions "getUser, modifyUser" in user.controller.js which receive a get/put request from the index routes ,validate the fields for (inserting,updating) then put/get a user in/from the database. | 0.5 | BOUYSSOU | DONE |
| US04 | Create the component for the user's details : detailUser.component.html (which contains the fields of the user's infos to update : name, email, password), detailUser.component.ts and detailUser.componen.spec.ts | In angular, create the component "detailUser" in the dashboard. Create the functions "getuser,editUser" in detailuser.component.ts which calls the functions of user.service.ts | 0.5 | BOUYSSOU | DONE |
| US04 | In angular, add the methods "getuser,editUser" to user.service.ts | getUser return a user from a list of User, editUser changes the attributes of the user : name, email and password | 0.5 | BOUYSSOU | DONE |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US06 |  Modify the Project schema to add the contributors[] list that reference a list of users as a field | The projectSchema in the /backoffice/models/project.js contains a field "contributors". The database is starting without any issues.| 0.5 | CHERIFI | DONE |
| US06 | add contributor.controller in "controllers" and create inside the function : getInvitations() that returns all the invitation for a project| The functions "getInvitations" have been created in documentation.controller.js | 0.5 | CHERIFI | DONE |
| US06 | in "frontoffice/components" create contributor.component,in the view add table to display the contributors and add modal with select input to invite contributors and display invitations, in contributors.component.controller add the functions getInvitations() wchich calls the the function getInvitations in contributor.service, inviteContributor() wchich calls the the function inviteContributor in contributor.service and these function will fetch contributors routes in 'backoffice/routes/' | the component has been created. the functions have been been added in the controller and in the service.| 0.5 | CHERIFI | DONE |


----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US07 | add the route '/:id/contributors/:idContributor' that calls the function deleteContributor in contributor.controller | the route and the function have been been added, the contributor has been deleted| 0.5 | CHERIFI | DONE |
| US07 | in contributor component view, add button delete before each contributor, clicking on this button will call the function removeContribtor() with calls the method removeContributor() in contributor.service, in contributor service create the funtion removeContributor() which will fetch the delete route of the api| the functions have been added, the contributor has been deleted from the project | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US08 | add the route ''/:id/invite' that call the function inviteContributor in contributor.controller,add the function inviteContributor that insert the invitation and send an email to the contributor | the route has been added, the function has been added, the email is sent nd received without probleme | 0.5 | CHERIFI | DONE |
| US08 | add the route '/:id/contributors/:invitation/:email' that call the function addContributor in contributor.controller,add the function addContributor that add the contributor to the project if he accept it in the received email | the route has been added, the function has been added, the contributor is added to the project | 0.5 | CHERIFI | DONE |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US17 | Modify the user selection for the task creation to select users which are contributors. | The users[] list in "task.component.ts" is replaced by the contributors[] list. The function "getUSers" is replaced by "getContributors" which returns the list of contributors of the project.| 0.5 | CHERIFI | DONE |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US20 | Modify the Project schema to add the documentation[] list as a field | The projectSchema in the /backoffice/models/project.js contains a field "documentations". The database is starting without any issues.| 0.5 | BOUYSSOU | DONE |
| US20 | Create the mongoose schema that represents the documentation. Add the corresponding routes in /backoffice. | The schema Documentation(title,description,link) is defined in "backoffice/models/documentation.js". In the middleware "backoffice/routes/projects.router.js", the routes post("/:idProject/documentations"), put("/:idProject/documentations/:idDocumentation") and delete("/:idProject/documentations/:idDocumentation") have been added.| 0.5 | BOUYSSOU | DONE |
| US20 | Create the functions that receive a get/post/put/delete request from the documentations routes, validate the fields for insertion/update then get documentations from the database or delete/put a documentation | The functions "getDocumentations, createDocumentation,editDocumentation,deleteDocumentation" have been created in documentation.controller.js | 0.5 | BOUYSSOU | DONE |
| US20 | In /frontoffice, create the component "documentation" and create the functions which manage documentations using the documentation service | In /frontoffice, the functions "getDocumentations,onSubmitDocumentation ,onSubmitEditDocumentation, updateModalEditDocumentation, removeDocumentation" have been added in documentation.component.ts which call the functions of documentations.service.ts | 0.5 | BOUYSSOU | DONE |
| US20 | In /frontoffice, generate the "documentation" service. | The file "services/documentations.service.ts" has been created and contains the methods "getDocumentations,addDocumentation,editDocumentation,removeDocumentation" that receive informations from documentation.component.ts and fetch the documentations routes. | 0.5 | BOUYSSOU | DONE |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US21 | in project list component view, add quit project button in the line of contributor projects that call the function remove contributor in the controller, add the function removeContributor() in the controller which call the method removeContributor in the contributor.service which fetch remove contributor route in the API. | the button is added, the function is added, the project is deleted from the list of projects | 0.5 | CHERIFI | DONE |
----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US22 | Create a Routes.md file containing a list of the API routes, with details | Routes.md is created with all the API routes indicated | 0.5 | MARTINEAU | DONE |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US01, US02, US09, US10, US15, US18, US19, US20 | Create integration tests, for testing API routes.| The backoffice/tests/integration.tests is composed of files testing each route. | 0.5 | MARTINEAU | TODO |

----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US01, US02, US09, US10, US15, US18, US19, US20 | add selenium-driver to the project, add travis to the project, add eslint to the project | selenium, travis & eslint are runned without problems| 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------
| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US23 | Create the user documentation | The file "User Documentation" has been created. It explains how to use the site to the user.| 0.5 | BOUYSSOU | ON GOING |
----------------------------------------------------------------------------------------------------------------------

| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| US23 | Add JSDoc for the angular project | Methods are explained is JSDoc comments. | 0.5 | MARTINEAU | ON GOING |


| ID_issue | task_description | Definition of Done | cost (day) | Developer | Status | 
| :-: | :-: | :-: | :-: | :-: | :-: |
| GENERAL | deploy the dev repository on Heroku | the application is available on https://cdpmyprojectanager.herokuapp.com  | 0.5 | CHERIFI | DONE |

----------------------------------------------------------------------------------------------------------------------

