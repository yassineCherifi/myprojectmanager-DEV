let params = require('./params')
let mongoose = require("mongoose");
let User = require('../../models/user');
let Project = require('../../models/project');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');
let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);

describe('Get project test, add a project', () => {
    before((done) => {
        User.remove({}, (err) => { });
        Project.remove({}, (err) => { });
        chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    after((done) => {
        User.remove({}, (err) => { });
        Project.remove({}, (err) => { done() });
    });


    describe('/GET /POST Projects', () => {

        it('it should get projects and add one new project', (done) => {
            chai.request(app)
                .post(params.loginHTTP)
                .send(params.login_details)
                .end((err, res) => {
                    let token = res.body.token;

                    chai.request(app)
                        .get(params.projectsHTTP)
                        .set('cookie', "token=" + token)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.have.property('result');
                            res.body.should.have.property('idlogged');
                            let nb_projects = res.body.result.length;
                            let idUser = res.body.idlogged;
                            project_details_test = params.project_details

                            project_details_test.creator = idUser;

                            chai.request(app)
                                .post(params.projectsHTTP)
                                .set('cookie', "token=" + token)
                                .send(project_details_test)
                                .end((err, res) => {
                                    res.should.have.status(200);

                                    chai.request(app)
                                        .get(params.projectsHTTP)
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
