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


  public project_id;
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
  isCreator: boolean = false;

  /**
   * Initialize the detaiProjet component.
   */
  ngOnInit() {
    this.project_id = this.route.snapshot.paramMap.get('id');
    this.getProject();

  }

  /**
   * Get the selected project.
   */
  getProject() {
    this.projetService.getProject(this.project_id).subscribe(data => {
      this.project = data['project'];
      this.idLogged = this.userService.getIDOflogged();
      if (this.project.creator['_id'] === this.idLogged) {
        this.isCreator = true;
      }
      else {
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
    this.projetService.editProject(this.project['_id'], form.value).subscribe(
      res => {
        this.getProject();

      },
      err => {
        console.log(err);
      }
    );
  }
}
