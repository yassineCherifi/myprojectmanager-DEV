import { Component, OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detailsprint',
  templateUrl: './detailsprint.component.html'
})


export class DetailsprintComponent implements OnInit {
  projectId;
  sprintID;
  nbrDifficulte = 0;
  nbrDifficulteRe = 0;
  sprint = {};
  issues = [];
  selectedItems;
  modelIssueEdit = {
    _id: '',
    issueID: '',
    description: '',
    priorite: '',
    difficulte: '0',
    status: '0'
  };
  events: Event[] = [];
  constructor(private sprintService: SprintService,
              private issueService: IssuesService,
              private route: ActivatedRoute) { }


  /**
   * Initialization of detailSprint component.
   */
  ngOnInit() {
    this.getSprint();
  }

  /**
   * Get selected sprint infos.
   */
  getSprint() {
    this.route.parent.params.subscribe(params => {
      const id = 'id';
      this.projectId = params[id];
    });
    this.sprintID = this.route.snapshot.paramMap.get('idSprint');

    this.sprintService.getSprint(this.projectId, this.sprintID).subscribe(data => {
      const sprint = 'sprint';
      const issues = 'issues';
      this.sprint = data[sprint];
      this.issueService.getIssues(this.projectId).subscribe(data => {

        const res = data[issues].filter(item1 =>
          !this.sprint[issues].some(item2 => (item2._id === item1._id)));
        this.issues = res;
        this.nbrDifficulte = 0;
        this.nbrDifficulteRe = 0;
        this.sprint[issues].forEach(e => {
          this.nbrDifficulte = this.nbrDifficulte + parseInt(e.difficulte);
          if (e.status === 'Terminé') {
            this.nbrDifficulteRe = this.nbrDifficulteRe + parseInt(e.difficulte);
          }
        });
      });
    });


  }

  /**
   * Add an issue to the sprint.
   * @param $event Add event
   */
  onAdd($event) {
    this.sprintService.addIssueSprint(this.projectId, this.sprintID, { idIssue: $event }).subscribe(
      res => {
        this.getSprint();
        this.selectedItems = null;
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * Update the edit issue template.
   * @param issue issue reference
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
   * Edit an issue
   * @param form form containing the issue infos.
   */
  onSubmitEditIssue(form: NgForm) {
    this.issueService.editIssue(this.projectId, this.modelIssueEdit._id, form.value).subscribe(
      res => {
        form.resetForm();
        this.getSprint();
      },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * Remove an issue from the sprint.
   * @param issueId id of issue to remove
   */
  removeIssueFromSprint(issueId) {
    this.sprintService.removeIssue(this.projectId, this.sprintID, issueId).subscribe(data => this.getSprint());

  }
}
