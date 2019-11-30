import { Component, OnInit} from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listprojets',
  templateUrl: './listprojets.component.html'
})
export class ListprojetsComponent implements OnInit {

  public projects = [];

  constructor(private projectsService : ProjetService, private userService : UserService) { }

  model = {
    title: '',
    description: ''
  }

  /**
   * Initialize the listProjets component.
   */
  ngOnInit() {
    this.getProjects();
  }


  /**
   * Get the projects list.
   */
  getProjects(){
    this.projectsService.getProjects().subscribe(data => this.projects = data);
  }

  /**
   * Remove a project.
   * @param id id of the project to remove.
   */
  removeProject(id) {
    this.projectsService.deleteProject(id).subscribe(data => this.getProjects());
  }


  /**
   * Create a new project from form info
   * @param form form containing the new project info.
   */
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
