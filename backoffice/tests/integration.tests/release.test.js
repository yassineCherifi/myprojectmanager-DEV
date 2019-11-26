let params = require('./params')
let mongoose = require("mongoose");
let User = require('../../models/user');
let Release = require('../../models/release');
let Project = require('../../models/project');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');
let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);

describe('Get releases test, add a release', () => {
    before((done) => {
        chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


    describe('/GET /POST Releases', () => {

        it('it should get releases and add one new release', (done) => {
            chai.request(app)
                .post(params.loginHTTP)
                .send(params.login_details)
                .end((err, res) => {
                    let token = res.body.token;

                    chai.request(app)
                        .post(params.projectsHTTP)
                        .set('cookie', "token=" + token)
                        .send(params.project_details)
                        .end((err, res) => {
                            res.should.have.status(200);
                            let idProject = res.body._id;
                            chai.request(app)
                                .post((params.projectsHTTP) + "/" + idProject + '/releases')
                                .send(params.release_details)
                                .set('cookie', "token=" + token)
                                .end((err, res) => {

                                    res.should.have.status(200);
                                    chai.request(app)
                                        .get((params.projectsHTTP) + "/" + idProject + '/releases')
                                        .set('cookie', "token=" + token)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.have.property('releases')
                                            Release.remove({}, (err) => { done() });
                                        });
                                });
                        });

                });
        });
    });
});
