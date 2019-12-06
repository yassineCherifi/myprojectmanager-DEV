let params = require('./params');
let Sprint = require('../../models/sprint');
let User = require('../../models/user');
let Project = require('../../models/project');

process.env.NODE_ENV = 'test';

let app = require('../../app');
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);

describe('Get sprints test, add an sprint', () => {
    before((done) => {
        User.remove({}, (err) => {});
        Project.remove({}, (err) => {});
        Sprint.remove({}, (err) => {});
        chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


    describe('/GET /POST sprints', () => {

        it('it should get sprints and add one new sprint', (done) => {
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
                                .post((params.projectsHTTP) + "/" + idProject + '/sprints')
                                .send(params.sprint_details)
                                .set('cookie', "token=" + token)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    chai.request(app)
                                        .get((params.projectsHTTP) + "/" + idProject + '/sprints')
                                        .set('cookie', "token=" + token)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.have.property('sprints')
                                            Sprint.remove({}, (err) => { done() });
                                        });
                                });
                        });

                });
        });
    });
});
