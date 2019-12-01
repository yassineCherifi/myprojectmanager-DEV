import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private httpClient: HttpClient, private userervice: UserService) { }


  /**
   * Get the project list.
   */
  getProjects(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(environment.API_URL + '/projects');
  }

  /**
   * Get a project.
   * @param id id of the project.
   */
  getProject(id): Observable<Projet> {
    return this.httpClient.get<Projet>(environment.API_URL + '/projects/' + id);
  }

  /**
   * Delete a project.
   * @param id id of the project.
   */
  deleteProject(id) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + id);
  }

  /**
   * Add a new project.
   * @param project project to be added.
   */
  addProject(project) {
    return this.httpClient.post(environment.API_URL + '/projects', project);
  }

  /**
   * Edit a project.
   * @param idProject id of the project.
   * @param project edited project.
   */
  editProject(idProject, project) {
    return this.httpClient.put(environment.API_URL + '/projects/' + idProject, project);
  }

}
