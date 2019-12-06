let params = require('./params');
let Task = require('../../models/task');
let User = require('../../models/user');
let Project = require('../../models/project');

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../app');

chai.use(chaiHttp);

describe('Get tasks test, add an task', () => {
    before((done) => {
        User.remove({}, (err) => {});
        Project.remove({}, (err) => {});
        Task.remove({}, (err) => {});
        chai.request(app)
            .post(params.registerHTTP)
            .send(params.register_details)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


    describe('/GET /POST tasks', () => {

        it('it should get tasks and add one new task', (done) => {
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
                                .post((params.projectsHTTP) + "/" + idProject + '/tasks')
                                .send(params.task_details)
                                .set('cookie', "token=" + token)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    chai.request(app)
                                        .get((params.projectsHTTP) + "/" + idProject + '/tasks')
                                        .set('cookie', "token=" + token)
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.have.property('tasks')
                                            Task.remove({}, (err) => { done() });
                                        });
                                });
                        });

                });
        });
    });
});
