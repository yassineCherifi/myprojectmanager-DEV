import { Component, OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-detailsprint',
  templateUrl: './detailsprint.component.html',
  styleUrls: ['./detailsprint.component.scss']
})


export class DetailsprintComponent implements OnInit {
  project_id;
  sprintID;
  sprint = {};
  issues = [];
  test: any;
  constructor(private sprintService: SprintService,
    private issueService: IssuesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id']; // true
    })
    this.sprintID = this.route.snapshot.paramMap.get('idSprint');
    this.sprintService.getSprint(this.project_id, this.sprintID).subscribe(data => {
      this.sprint = data['sprint'];
    })

    this.issueService.getIssues(this.project_id).subscribe(data => this.issues = data['issues']);
  }
  
 


}
