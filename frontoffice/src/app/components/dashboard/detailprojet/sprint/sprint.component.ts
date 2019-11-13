import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SprintService } from 'src/app/services/sprint.service';
import { ActivatedRoute } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})


export class SprintComponent implements OnInit {
  project_id;
  sprints = [];
  modelSprint = {
    title: '',
    startDate: '',
    endDate: '',
    status: '',
    issues: ''
  }
  modelSprintEdit = {
    _id: '',
    title: '',
    startDate: '',
    endDate: '',
    status: '',
    issues: ''
  }

  modelDate;


  constructor(private sprintService : SprintService,private route : ActivatedRoute, private calendar : NgbCalendar) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id']; // true
      console.log(this.project_id)
    })
    this.getSprints();
    this.modelDate = this.calendar.getToday();

  }

  getSprints() {
    this.sprintService.getSprints(this.project_id).subscribe(data => this.sprints = data['sprints']);
  }

  onSubmitSprint(form: NgForm) {
    this.sprintService.addSprint(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getSprints()
      },
      err => {
        console.log(err);
      }
    );
  }
  updateModalEditSprint(sprint) {
    this.modelSprintEdit._id = sprint._id;
    this.modelSprintEdit.title = sprint.title;
    this.modelSprintEdit.startDate = sprint.startDate;
    this.modelSprintEdit.endDate = sprint.endDate;
    this.modelSprintEdit.status = sprint.status;
    //this.modelSprintEdit.issues = sprint.issues[0];
  }
  onSubmitEditSprint(form: NgForm) {
    this.sprintService.editSprint(this.project_id, this.modelSprintEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getSprints()
      },
      err => {
        console.log(err);
      }
    );
  }

  removeSprint(id) {
    this.sprintService.removeSprint(this.project_id, id).subscribe(data => this.getSprints());
  }

}
