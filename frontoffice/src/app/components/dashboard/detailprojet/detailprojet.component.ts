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
    description: ''
  }
  idLogged;
  isCreator: boolean = false;
  ngOnInit() {
    this.project_id = this.route.snapshot.paramMap.get('id');
    this.getProject();

  }

  getProject() {
    this.projetService.getProject(this.project_id).subscribe(data => {
      this.project = data['project']
      this.idLogged = this.userService.getIDOflogged();
      if (this.project.creator['_id'] == this.idLogged) {
        this.isCreator = true;
      }
      else {
        this.isCreator = false;
      }
      this.modelproject.title = this.project.title;
      this.modelproject.description = this.project.description;
    });
  }


  editProject(form: NgForm) {
    if (form.value.title === "" || form.value.description === "") {
      this.getProject();
      return;
    }
    this.projetService.editProject(this.project['_id'], form.value).subscribe(
      res => {
        this.getProject()

      },
      err => {
        console.log(err);
      }
    );
  }













}
