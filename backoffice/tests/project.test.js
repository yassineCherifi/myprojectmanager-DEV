let mongoose = require("mongoose");
let User = require('../models/user');
let Project = require('../models/project');

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


let project_details = {
    'title': 'ProjectTest',
    'description': 'ProjectDescription',
    'creator': ''
}

describe('Get project test, add/remove a project', () => {
    before((done) => {
        User.remove({}, (err) => { });
        Project.remove({}, (err) => { });
        chai.request(app)
            .post('/api/register')
            .send(register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


    describe('/GET /POST Projects', () => {

        it('it should get projects and add one new project', (done) => {
            chai.request(app)
                .post('/api/login')
                .send(login_details)
                .end((err, res) => {
                    let token = res.body.token;

                    chai.request(app)
                        .get('/api/projects/')
                        .set('cookie', "token=" + token)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.have.property('result');
                            res.body.should.have.property('idlogged');
                            let nb_projects = res.body.result.length;
                            let idUser = res.body.idlogged;
                            project_details.creator = idUser;

                            chai.request(app)
                                .post('/api/projects/')
                                .set('cookie', "token=" + token)
                                .send(project_details)
                                .end((err, res) => {
                                    res.should.have.status(200);

                                    chai.request(app)
                                        .get('/api/projects/')
                                        .set('cookie', "token=" + token)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            expect(res.body.result.length).to.equal(nb_projects + 1);
                                            done();
                                        });
                                });
                        });
                });
        });
    });
});