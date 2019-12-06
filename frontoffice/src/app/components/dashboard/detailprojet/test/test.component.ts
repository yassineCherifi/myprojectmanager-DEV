import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  projectId;
  tests = [];
  modelTest = {
    title: '',
    description: '',
    type: '0',
    date: {},
    link: '',
    status: '0'
  };

  modelTestEdit = {
    _id: '',
    title: '',
    description: '',
    type: '0',
    date: {},
    link: '',
    status: '0'
  };

  modelDate;
  nbrPass = 0;
  nbrFailed = 0;
  notYet = 0;

  constructor(private testsService: TestsService,
              private route: ActivatedRoute,
              private calendar: NgbCalendar) { }

  /**
   * Initialize the test component.
   */
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.projectId = params['id'];
    });
    this.getTests();
    this.modelTest.date = this.calendar.getToday();
  }

  /**
   * Get the current project test list.
   */
  getTests() {
    this.testsService.getTests(this.projectId).subscribe(data => {
      this.tests = data['tests'];
      this.nbrPass = 0;
      this.nbrFailed = 0;
      this.notYet = 0;
      this.tests.forEach(e => {
        if (e.status === 'Passé') {
          this.nbrPass = this.nbrPass + 1;
        }
        else if (e.status === 'En cours') {
          this.notYet = this.notYet + 1;
        }
        else if (e.status === 'Echoué') {
          this.nbrFailed = this.nbrFailed + 1;
        }
      });
    });
  }

  /**
   * Add a test from form info.
   * @param form form containing the test info.
   */
  onSubmitTest(form: NgForm) {
    const date = form.value.dp;
    form.value.dp = date.day + '/' + date.month + '/' + date.year;
    this.testsService.addTest(this.projectId, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelTest.status = '0';
        this.modelTest.type = '0';
        this.getTests();
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * Remove a test from project.
   * @param id id of test to remove.
   */
  removeTest(id) {
    this.testsService.removeTest(this.projectId, id).subscribe(data => this.getTests());
  }

  /**
   * Update test edit form from test info
   * @param test test info
   */
  updateModalEditTest(test) {
    this.modelTestEdit._id = test._id;
    this.modelTestEdit.title = test.title;
    this.modelTestEdit.description = test.description;
    this.modelTestEdit.type = test.type;
    const tmpDate = test.date.split('/');
    this.modelTestEdit.date = { year: parseInt(tmpDate[2]), month: parseInt(tmpDate[1]), day: parseInt(tmpDate[0]) };
    this.modelTestEdit.link = test.link;
    this.modelTestEdit.status = test.status;
  }

  /**
   * Edit a test from form info
   * @param form form containing the test info
   */
  onSubmitEditTest(form: NgForm) {
    const date = form.value.dp;
    form.value.dp = date.day + '/' + date.month + '/' + date.year;
    this.testsService.editTest(this.projectId, this.modelTestEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getTests();
      },
      err => {
        console.log(err);
      }
    );
  }
}
