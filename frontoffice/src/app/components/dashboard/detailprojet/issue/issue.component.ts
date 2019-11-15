import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/services/issues.service';
import { ActivatedRoute } from '@angular/router';
import { Issues } from 'src/app/models/issues.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html'
})
export class IssueComponent implements OnInit {
  project_id;
  issues = [];
  selectedItem;
  modelIssue: Issues = {
    issueID: '',
    description: '',
    priorite: '',
    difficulte: '',
    status: '0'
  }

  modelIssueEdit = {
    _id: '',
    issueID: '',
    description: '',
    priorite: '',
    difficulte: '0',
    status: '0'
  }
  constructor(private issueService: IssuesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.parent.params.subscribe(params => {
      this.project_id = params['id']; // true
    })
    this.getIssues();
  }

  getIssues() {
    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }


  onSubmitIssue(form: NgForm) {
    this.issueService.addIssue(this.project_id, form.value).subscribe(
      res => {
        form.resetForm();
        this.modelIssue.status = '0';
        this.modelIssue.difficulte = '0';
        this.getIssues();
      },
      err => {
        console.log(err);
      }
    );
  }
  removeIssue(id) {
    this.issueService.removeIssue(this.project_id, id).subscribe(data => this.getIssues());
  }
  updateModalEditIssue(issue) {
    this.modelIssueEdit._id = issue._id;
    this.modelIssueEdit.issueID = issue.issueID;
    this.modelIssueEdit.description = issue.description;
    this.modelIssueEdit.priorite = issue.priorite;
    this.modelIssueEdit.difficulte = issue.difficulte;
    this.modelIssueEdit.status = issue.status;
    console.log(this.modelIssueEdit._id);
  }

  onSubmitEditIssue(form: NgForm) {
    this.issueService.editIssue(this.project_id, this.modelIssueEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getIssues();
      },
      err => {
        console.log(err);
      }
    );
  }

  sort($event) {
    if ($event !== undefined) {
      const clicked = $event.$ngOptionLabel;
      switch (clicked) {
        case "ID": {
          this.issues = this.issues.sort((a, b) => a.issueID.localeCompare(b.issueID))
          break;
        }
        case "Priorité": {
          this.issues = this.issues.sort((a, b) => a.priorite.localeCompare(b.priorite))
          break;
        }
        case "Difficulté": {
          this.issues = this.issues.sort((b, a) => a.difficulte.localeCompare(b.difficulte))
          console.log(this.issues);
          break;
        }
      }
    }
  }

}
