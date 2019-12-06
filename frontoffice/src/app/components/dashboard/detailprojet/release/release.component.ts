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
  projectId;
  releases = [];
  sprints = [];
  issues = [];
  modelRelease = {
    title: '',
    description: '',
    version: '',
    date: {},
    sprintNumber: '0',
    link: ''
  };

  modelReleaseEdit = {
    _id: '',
    title: '',
    description: '',
    version: '',
    date: {},
    sprintNumber: '',
    link: ''
  };

  modelDate;

  constructor(private releasesService: ReleasesService, private sprintService: SprintService, private issueService: IssuesService,
              private route: ActivatedRoute,
              private calendar: NgbCalendar) { }


  /**
   * Initialize the release component.
   */
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.projectId = params['id'];
    });
    this.getReleases();
    this.getSprints();
    this.getIssues();

    this.modelRelease.date = this.calendar.getToday();
  }

  /**
   * Get the current project issue list.
   */
  getIssues() {
    this.issueService.getIssues(this.projectId).subscribe(data => this.issues = data['issues']);
  }

  /**
   * Get the current project release list.
   */
  getReleases() {
    this.releasesService.getReleases(this.projectId).subscribe(data => this.releases = data['releases']);
  }

  /**
   * Get the current project sprint list.
   */
  getSprints() {
    this.sprintService.getSprints(this.projectId).subscribe(data => this.sprints = data['sprints']);
  }

  /**
   * Add a release from form info.
   * @param form form containing the release info.
   */
  onSubmitRelease(form: NgForm) {
    const date = form.value.date;
    form.value.date = date.day + '/' + date.month + '/' + date.year;
    this.releasesService.addRelease(this.projectId, form.value).subscribe(
      res => {
        form.resetForm();
        this.getReleases();
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * Remove a release from project.
   * @param id id of release to remove.
   */
  removeRelease(id) {
    this.releasesService.removeRelease(this.projectId, id).subscribe(data => this.getReleases());
  }

  /**
   * Update release edit form from release info
   * @param release release info
   */
  updateModalEditRelease(release) {
    this.modelReleaseEdit._id = release._id;
    this.modelReleaseEdit.title = release.title;
    this.modelReleaseEdit.description = release.description;
    this.modelReleaseEdit.version = release.version;
    const tmpDate = release.date.split('/');
    this.modelReleaseEdit.date = { year: parseInt(tmpDate[2]), month: parseInt(tmpDate[1]), day: parseInt(tmpDate[0]) };
    this.modelReleaseEdit.sprintNumber = release.sprintNumber;
    this.modelReleaseEdit.link = release.link;
  }

  /**
   * Edit a release from form info
   * @param form form containing the release info
   */
  onSubmitEditRelease(form: NgForm) {
    const date = form.value.date;
    form.value.date = date.day + '/' + date.month + '/' + date.year;
    this.releasesService.editRelease(this.projectId, this.modelReleaseEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getReleases();
      },
      err => {
        console.log(err);
      }
    );
  }
}
