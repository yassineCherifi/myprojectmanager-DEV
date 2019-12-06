let params = require('./params')
let Documentation = require('../../models/documentation');
let User = require('../../models/user');
let Project = require('../../models/project');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');

chai.use(chaiHttp);

describe('Get documentations test, add an documentation', () => {
    before((done) => {
        User.remove({}, (err) => {});
        Project.remove({}, (err) => {});
        Documentation.remove({}, (err) => {});
        chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


    describe('/GET /POST documentations', () => {

        it('it should get documentations and add one new documentation', (done) => {
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
                                .post((params.projectsHTTP) + "/" + idProject + '/documentations')
                                .send(params.documentation_details)
                                .set('cookie', "token=" + token)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    chai.request(app)
                                        .get((params.projectsHTTP) + "/" + idProject + '/documentations')
                                        .set('cookie', "token=" + token)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.have.property('documentations')
                                            Documentation.remove({}, (err) => { done() });
                                        });
                                });
                        });

                });
        });
    });
});
