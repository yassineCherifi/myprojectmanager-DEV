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
  users = [];
  selectedUser;
  constructor(private route: ActivatedRoute, private projectService: ProjetService,
    private contributorService: ContributorService, private userService: UserService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.project_id = params['id'];
      this.getContributors();
    })
  }
  getContributors() {
    this.projectService.getProject(this.project_id).subscribe(data => {
      this.project = data['project'];
      this.contributors = this.project['contributors']
      this.getUsers();
    });

  }
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      //this.users = data['users'];
      let res = data['users'].filter(item1 =>
        !this.contributors.some(item2 => (item2._id === item1._id || item1._id === this.project['creator']._id )))
      this.users = res;
      
    });

  }

  onAdd($event) {
    this.contributorService.addContributor(this.project_id,$event).subscribe(
      res => {
        this.getContributors();
        this.selectedUser = null;
      },
      err => {
        console.log(err);
      }
    );
  }

  removeContributor(id) {
    this.contributorService.removeContributor(this.project_id, id).subscribe(data => this.getContributors());
  }

}
