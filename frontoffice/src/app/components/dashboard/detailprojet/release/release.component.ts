import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ReleasesService } from 'src/app/services/releases.service';
import { SprintService } from 'src/app/services/sprint.service';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html'
})
export class ReleaseComponent implements OnInit {
  project_id;
  releases = [];
  sprints = [];
  issues = [];
  modelRelease = {
    title: '',
    description: '',
    version: '',
    date: '',
    sprintNumber: '',
    link: ''
  }

  modelReleaseEdit = {
    _id: '',
    title: '',
    description: '',
    version: '',
    date: '',
    sprintNumber: '',
    link: ''
  }

  modelDate;

  constructor(private releasesService: ReleasesService, private sprintService: SprintService, private issueService: IssuesService,
    private route: ActivatedRoute,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
    })
    this.getReleases();
    this.getSprints();
    this.getIssues();

    this.modelDate = this.calendar.getToday();
  }
  getIssues() {
    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }
  getReleases() {
    this.releasesService.getReleases(this.project_id).subscribe(data => this.releases = data['releases']);
  }
  getSprints() {
    this.sprintService.getSprints(this.project_id).subscribe(data => this.sprints = data['sprints']);

  }
  onSubmitRelease(form: NgForm) {
    let date = form.value.date;
    form.value.date = date.day + "/" + date.month + "/" + date.year;
    this.releasesService.addRelease(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getReleases()
      },
      err => {
        console.log(err);
      }
    );
  }

  removeRelease(id) {
    this.releasesService.removeRelease(this.project_id, id).subscribe(data => this.getReleases());
  }

  updateModalEditRelease(release) {
    this.modelReleaseEdit._id = release._id;
    this.modelReleaseEdit.title = release.title;
    this.modelReleaseEdit.description = release.description;
    this.modelReleaseEdit.version = release.version;
    this.modelReleaseEdit.date = release.date;
    this.modelReleaseEdit.sprintNumber = release.sprintNumber;
    this.modelReleaseEdit.link = release.link;
  }

  onSubmitEditRelease(form: NgForm) {
    let date = form.value.date;
    form.value.date = date.day + "/" + date.month + "/" + date.year;
    this.releasesService.editRelease(this.project_id, this.modelReleaseEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getReleases()
      },
      err => {
        console.log(err);
      }
    );
  }
}
