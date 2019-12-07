The development version is deployed on : https://cdpmyprojectanager.herokuapp.com

To use it in development mode :<br>
  `docker-compose up -d mongodb` to run the database<br>
  `cd backoffice && npm install` && `node app.js` to run the server on the URI `http://localhost:3002`<br>
   `cd frontoffice && npm install` && `ng serve --open` to run the angular application on the URI       `http://localhost:4200`

To use it in production mode :<br>
  in `myprojectmanager-DEV/` run `docker-compose up --build`<br>
  visit the URL `http://localhost:3002`