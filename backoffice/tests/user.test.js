let mongoose = require("mongoose");
let User = require('../models/user');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);

let userName = 'TestName';
let userEmail = 'testemail@test.fr';
let userPassword = 'testtest';

let register_details = {
    'name': userName,
    'email': userEmail,
    'password': userPassword
};

let login_details = {
    'email': userEmail,
    'password': userPassword
};
let login_details_wrong = {
   'email': userEmail,
   'password': 'testtestwrong'
};


describe('Create account, login and check token', () => {
   beforeEach((done) => {
      User.remove({}, (err) => {
         done();
      });
   });


   describe('/POST Register', () => {

      it('it should register,login and have a valid token', (done) => {
         chai.request(app)
            .post('/api/register')
            .send(register_details)
            .end((err, res) => {
               res.should.have.status(200);

               chai.request(app)
                  .post('/api/login')
                  .send(login_details)
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.have.property('token');

                     let token = res.body.token;

                     chai.request(app)
                        .get('/api/dashboard')
                        .set('cookie', "token=" + token)
                        .end((err, res) => {
                           res.should.have.status(200);
                           res.body.should.have.property('user');
                           done();
                        });
                  });

            });
      });


      it('it should refuse access with wrong login', (done) => {
         chai.request(app)
            .post('/api/login')
            .send(login_details_wrong)
            .end((err, res) => {
               res.should.have.status(404);
               done();
            });
      });

   });

});
