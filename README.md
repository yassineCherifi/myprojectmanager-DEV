[![Build Status](https://travis-ci.com/yassineCherifi/myprojectmanager-DEV.svg?branch=master)](https://travis-ci.com/yassineCherifi/myprojectmanager-DEV)
# myprojectmanager-DEV
A system that facilitates the management of projects using the agile process framework SCRUM  

The project is by default in developement: 

to use it in development mode :<br>
  `docker-compose up -d mongodb` to run the database<br>
  `cd backoffice && npm install` && `node app.js` to run the server on the URI `http://localhost:3002`<br>
   `cd frontoffice && npm install` && `ng serve --open` to run the angular application on the URI       `http://localhost:4200`
   
to use it in production mode :<br>
  in `backoffice/config/config.json` change the mode to `production`<br>
  in `frontoffice/src/environments/environment.ts` change the API URL to : `http://localhost:3000/api`<br>
  in `frontoffice/` run `npm run build/` to build the angular application<br>
  in `myprojectmanager-PROD/` run `docker-compose up --build`<br>
  visit the URL `http://localhost:3000`
  
Backlog

| ID | As a.. | I want to be able | So that | Priority | Difficulty | Sprint | Status |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| US01 | User | to sign-up by providing my name (20 chars max), email and password (min length 8) and clicking on the button "sign-up" | I will have my own dashboard | LOW | 1 | 1 | DONE |
| US02 | User | to sign-in by providing my email and password and clicking on the button "sign-in" | I can access to my dashboard | LOW | 3 | 1 | DONE |
| US03 | User | to logout by clicking on the button "logout" in the dashboard|  can get out of my dashboard | LOW | 1 | 1 | DONE |
| US04 | User | to edit my profile (name, email, password) by clicking on the button "edit profile" in the dashboard and modifying the fields (name(20 chars max), email, password (min length 8) and confirm or cancel the changes by clicking on the corresponding buttons | I can update my informations | LOW | 1 | 2 | ON GOING |
| US05 | Project manager | to create a new project (name(20 chars max) , description(100 chars max), status(En cours,  terminé)) and edit it or delete it by clicking on the corresponding buttons in the dashboard, then confirming or cancelling | I can update the projects list | HIGH | 1 | 1 | DONE |
| US06 | Project manager | to add new contributors to my project by clicking on the button "Add contributor" and giving their emails then confirming or cancelling | They can start working with me | LOW | 3 | 3 | TODO |
| US07 | Project manager | to remove contributors to my project by selecting the contributor to delete and clicking on the button "Remove contributor" then confirming or cancelling | I can update the list of contributors | LOW | 2 | 3 | TODO |
| US08 | Project contributor | to receive an invitation of contribution in project then accepting or rejecting the invitation | I can update the backlog | LOW | 2 | 3 | TODO |
| US09 | Project contributor | to create an issue (id, description(100 char max), priority(10chars max), sprint number, status(todo,done)  and edit it or delete it by clicking on the corresponding buttons in the dahsboard then confirming or cancelling | I can update the backlog | HIGH | 1 | 1 | DONE |
| US10 | Project contributor | to create a sprint in the sprint tab by clicking on the button "New sprint" and by giving (title, start date, end date, status) on the form then confirming or cancelling | I can add it to the sprint list | LOW | 2 | 2 | DONE |
| US11 | Project contributor | to add a list of issues to the sprint by clicking on the button "Add issue to the sprint" then choosing items among the list of issues displayed on the form then confirming or cancelling | I can specify the required issues for the sprint | LOW | 3 | 2 | DONE |
| US12 | Project contributor | to search in the list of issues in the sprints tab | that facilitates the planification of the sprint | LOW | 1 | 2 | DONE |
| US13 | Project contributor | to sort the list of issues by difficulty or priority in the issues tab  | that facilitates the planification of the sprint | LOW | 3 | 2 | DONE |
| US14 | Project contributor | to delete an issue from the sprint by clicking on the corresponding button | I can update the list of issues in the sprint | LOW | 1 | 2 | DONE |
| US15 | Project contributor | to add a list of tasks to the project by clicking on the button tasks and giving (title(50 chars max), description(100chars max), id_issue,status(todo,done)) then confirming or cancelling | I specify the required tasks for the issue | HIGH | 2 | 1 | DONE |
| US16 | Project contributor | to edit a task and changing (title(50 chars max), description(100 chars max), status(todo,done)) or to delete it by clicking on corresponding buttons in the tasks tab then confirming or cancelling | I can update the tasks list | HIGH | 1 | 1 | DONE |
| US17 | Project manager | to assign a task to a contributor in the tasks list inside the sprints tab | I can specify the developer| LOW | 1 | 3 | TODO |
| US18 | Project contributor | to create a test list (title(50 chars max), description(100 chars max), type(unit,validation), date(dd/mm/aaaa), link, status(todo,done)) or edit it or delete it by clicking on the corresponding buttons in the tests tab then confirming or cancelling | I can update the test list | LOW | 1 | 2 | DONE |
| US19 | Project contributor | to create a release (title(20 chars max), description(100 chars max), version(10chars max), date(dd/mm/yyyy), sprint number, link) or to edit it or delete it by clicking on the corresponding buttons then confirming or cancelling  | I can update the releases list | LOW | 1 | 2 | DONE |
| US20 | Project contributor | to create a documentation list for my project (title(chars 10 max), description(chars 100 max), link) or to edit it or delete it by clicking on the corresponding buttons in the documentations tab then confirming or cancelling | I can answer users most FAQ by creating, editing or deleting a documentation | LOW | 1 | 3 | TODO |
| US21 | Project contributor | to stop working on a project by clicking on the button "Quit project" in my projects lists then confirming or cancelling| I take it off of my dahsboard | LOW | 2 | 3 | TODO |
| US22 | Developer | to understand how the API works | make queries on the site database | LOW | 1 | 3 | TODO |
| US23 | User | to understand how the website works | use the website properly | LOW | 1 | 3 | TODO |

