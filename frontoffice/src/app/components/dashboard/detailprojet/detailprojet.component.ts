import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'src/app/models/projet.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.component.html'
})
export class DetailprojetComponent implements OnInit {


  public projectId;
  public users = [];

  public project: Projet;


  constructor(
    private projetService: ProjetService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  modelproject = {
    title: '',
    description: '',
    status: ''
  };
  idLogged;
  isCreator = false;

  /**
   * Initialize the detaiProjet component.
   */
  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getProject();

  }

  /**
   * Get the selected project.
   */
  getProject() {
    this.projetService.getProject(this.projectId).subscribe(data => {
      const project = 'project';
      const id = '_id';
      this.project = data[project];
      this.idLogged = this.userService.getIDOflogged();
      if (this.project.creator[id] === this.idLogged) {
        this.isCreator = true;
      } else {
        this.isCreator = false;
      }
      this.modelproject.title = this.project.title;
      this.modelproject.description = this.project.description;
      this.modelproject.status = this.project.status;
    });
  }


  /**
   * Edit the selected project title and/or description form form info
   * @param form the form containing the new title and description.
   */
  editProject(form: NgForm) {
    if (form.value.title === '' || form.value.description === '') {
      this.getProject();
      return;
    }
    const id = '_id';
    this.projetService.editProject(this.project[id], form.value).subscribe(
      res => {
        this.getProject();

      },
      err => {
        console.log(err);
      }
    );
  }
}
