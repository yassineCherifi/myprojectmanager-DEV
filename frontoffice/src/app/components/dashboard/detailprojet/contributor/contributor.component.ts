import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { ContributorService } from 'src/app/services/contributor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
})
export class ContributorComponent implements OnInit {
  project_id;
  project;
  contributors = [];
  invitations = [];
  waiting = false;
  success = false;
  users = [];
  selectedUser;
  constructor(private route: ActivatedRoute, private projectService: ProjetService,
    private contributorService: ContributorService, private userService: UserService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
      this.getContributors();
      this.getInvitations();
    })
  }
  getContributors() {
    this.projectService.getProject(this.project_id).subscribe(data => {
      this.project = data['project'];
      this.contributors = this.project['contributors'];
      this.getUsers();
    });

  }

  getInvitations() {
    this.contributorService.getInvitations(this.project_id).subscribe(data => {
      this.invitations = data;
    });
  }
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data['users'].filter(item => !this.contributors.some(d => d._id === item._id || item._id === this.project['creator']._id ))
          });

  }

  onAdd($event) {
    this.waiting = true;
    this.contributorService.inviteContributor(this.project_id, $event).subscribe(
      res => {
        this.waiting = false;
        this.success = true;
        setTimeout(() => this.success = false, 2000);
        this.getInvitations();
        this.selectedUser = null;
      },
      err => {
        console.log(err);
      }
    );
  }

  removeContributor(id) {
    this.contributorService.removeContributor(this.project_id, id).subscribe(data => {
      this.getContributors()
      this.getUsers();
      this.getInvitations();
    });
  }

}
