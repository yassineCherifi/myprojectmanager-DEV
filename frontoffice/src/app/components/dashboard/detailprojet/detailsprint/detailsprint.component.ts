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
  project_id;
  sprintID;
  nbrDifficulte : number = 0;
  nbrDifficulteRes : number = 0;
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
      this.project_id = params['id']; // true
    });
    this.sprintID = this.route.snapshot.paramMap.get('idSprint');

    this.sprintService.getSprint(this.project_id, this.sprintID).subscribe(data => {
      this.sprint = data['sprint'];
      this.issueService.getIssues(this.project_id).subscribe(data => {

        const res = data['issues'].filter(item1 =>
          !this.sprint['issues'].some(item2 => (item2._id === item1._id)));
        this.issues = res;
        this.nbrDifficulte = 0;
        this.nbrDifficulteRes = 0;
        this.sprint['issues'].forEach(e => {
          this.nbrDifficulte = this.nbrDifficulte + parseInt(e.difficulte);
          if(e.status === "Terminé"){
            this.nbrDifficulteRes = this.nbrDifficulteRes + parseInt(e.difficulte);
          }
        });
      });
    })


  }

  /**
   * Add an issue to the sprint.
   * @param $event Add event
   */
  onAdd($event) {
    this.sprintService.addIssueSprint(this.project_id, this.sprintID, { idIssue: $event }).subscribe(
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
    this.issueService.editIssue(this.project_id, this.modelIssueEdit._id, form.value).subscribe(
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
    this.sprintService.removeIssue(this.project_id, this.sprintID, issueId).subscribe(data => this.getSprint());

  }


}
