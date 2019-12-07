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
  projectId;
  project;
  contributors = [];
  invitations = [];
  waiting = false;
  success = false;
  users = [];
  selectedUser;
  idLogged;
  isCreator = false;
  constructor(private route: ActivatedRoute, private projectService: ProjetService,
              private contributorService: ContributorService, private userService: UserService
  ) { }


  /**
   * Initialization of contributor component.
   */
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      const id = 'id';
      this.projectId = params[id];
      this.getContributors();
      this.getInvitations();
    });
  }


  /**
   * Get the contributor list of the current project.
   */
  getContributors() {
    this.projectService.getProject(this.projectId).subscribe(data => {
      const project = 'project';
      const id = '_id';
      const contributors = 'contributors';
      this.project = data[project];
      this.idLogged = this.userService.getIDOflogged();
      if (this.project.creator[id] === this.idLogged) {
        this.isCreator = true;
      }
      this.contributors = this.project[contributors];
      this.getUsers();
    });

  }

  /**
   * Get pending invitations for the current user and project.
   */
  getInvitations() {
    this.contributorService.getInvitations(this.projectId).subscribe(data => {
      this.invitations = data;
    });
  }


  /**
   * Get current project user list.
   */
  getUsers() {
    const users = 'users';
    const creator = 'creator';
    this.userService.getUsers().subscribe(data => {
      this.users = data[users].filter(item => !this.contributors.some(
                   d => d._id === item._id || item._id === this.project[creator]._id ));
    });

  }


  /**
   * Invite a new contributor.
   * @param $event invite event
   */
  onAdd($event) {
    this.waiting = true;
    this.contributorService.inviteContributor(this.projectId, $event).subscribe(
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

  /**
   * Remove a contributor from project
   * @param id id of contributor
   */
  removeContributor(id) {
    this.contributorService.removeContributor(this.projectId, id).subscribe(data => {
      this.getContributors();
      this.getUsers();
      this.getInvitations();
    });
  }

}
