let params = require('./params')
let mongoose = require("mongoose");
let User = require('../models/user');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);


describe('Create account, login and check token', () => {
   beforeEach((done) => {
      User.remove({}, (err) => {
         done();
      });
   });
   after((done) => {
      User.remove({}, (err) => {
         done();
      });
  });

   describe('/POST Register', () => {

      it('it should register,login and have a valid token', (done) => {
         console.log(params.registerHTTP)
         chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
               res.should.have.status(200);

               chai.request(app)
                  .post(params.loginHTTP)
                  .send(params.login_details)
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.have.property('token');

                     let token = res.body.token;

                     chai.request(app)
                        .get(params.dashboardHTTP)
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
            .post(params.loginHTTP)
            .send(params.login_details_wrong)
            .end((err, res) => {
               res.should.have.status(404);
               done();
            });
      });

   });

});
