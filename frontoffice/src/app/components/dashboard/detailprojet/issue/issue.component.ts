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
  };

  modelIssueEdit = {
    _id: '',
    issueID: '',
    description: '',
    priorite: '',
    difficulte: '0',
    status: '0'
  };
  constructor(private issueService: IssuesService, private route: ActivatedRoute) { }


  /**
   * Initialize issue component.
   */
  ngOnInit() {

    this.route.parent.params.subscribe(params => {
      this.project_id = params['id']; // true
    });
    this.getIssues();
  }

  /**
   * Get the current project issue list
   */
  getIssues() {
    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }


  /**
   * Add an issue from form info
   * @param form form containing the issue info
   */
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

  /**
   * Remove an issue
   * @param id id of the issue to remove
   */
  removeIssue(id) {
    this.issueService.removeIssue(this.project_id, id).subscribe(data => this.getIssues());
  }

  /**
   * Update issue edit form from issue info
   * @param issue issue info
   */
  updateModalEditIssue(issue) {
    this.modelIssueEdit._id = issue._id;
    this.modelIssueEdit.issueID = issue.issueID;
    this.modelIssueEdit.description = issue.description;
    this.modelIssueEdit.priorite = issue.priorite;
    this.modelIssueEdit.difficulte = issue.difficulte;
    this.modelIssueEdit.status = issue.status;
  }

  /**
   * Edit an issue from form info
   * @param form form containing the issue info
   */
  onSubmitEditIssue(form: NgForm) {
    this.issueService.editIssue(this.project_id, this.modelIssueEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.selectedItem = null;
        this.getIssues();
      },
      err => {
        console.log(err);
      }
    );
  }


  /**
   * Sort issues by criteria : "ID", "Priorité" or "Difficulté".
   * @param $event the criteria on which issues are sorted.
   */
  sort($event) {
    if ($event !== undefined) {
      const clicked = $event.$ngOptionLabel;
      switch (clicked) {
        case 'ID': {
          this.issues = this.issues.sort((a, b) => parseInt(a.issueID) - parseInt(b.issueID));
        }
        case 'Priorité': {
          this.issues = this.issues.sort((a, b) => a.priorite.localeCompare(b.priorite));
          break;
        }
        case 'Difficulté': {
          this.issues = this.issues.sort((a, b) => parseInt(a.difficulte) - parseInt(b.difficulte));
          break;
        }
      }
    }
  }

}
