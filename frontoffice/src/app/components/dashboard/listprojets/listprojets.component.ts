import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html',
  styleUrls: ['./listprojets.component.scss']
})
export class ListprojetsComponent implements OnInit {
  
  public projects = []; 

  constructor(private projectsService : ProjetService, private userService : UserService) { 
    
  }


  idLogged;
  model = {
    title: '',
    description: ''
  }
  
  ngOnInit() {
    this.getProjects();
    this.idLogged = this.userService.getIDOflogged();
  }

  setSelectedProject(selected_project){
    this.projectsService.selectProject(selected_project);
  }

  getProjects(){
    this.projectsService.getProjects().subscribe(data => (this.projects = data));
    console.log(this.projects)
    
  }
  removeProject(id) {
    this.projectsService.deleteProject(id).subscribe(data => console.log( data));
    this.getProjects();

  }
 

  onSubmit(form: NgForm) {
    this.projectsService.addProject(form.value).subscribe(
      res => {
        form.resetForm();
        this.getProjects();
      },
      err => {
        console.log(err);
      }

    );
  }
}
