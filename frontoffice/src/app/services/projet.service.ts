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

  selected_project;

  selectProject(project){
    this.selected_project = project;
    console.log(project);
  }

  getSelectedProject(){
    return this.selected_project;
  }

  getProjects(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(environment.API_URL + '/projects');
  }

  getProject(id): Observable<Projet[]> {
    console.log((this.httpClient.get<Projet[]>(environment.API_URL + '/projects/' + id)));
    return this.httpClient.get<Projet[]>(environment.API_URL + '/projects/' + id);
  }

  deleteProject(id) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + id);
  }

  addProject(project) {
    const loggedId = this.userervice.getIDOflogged();

    return this.httpClient.post(environment.API_URL + '/projects', project, { headers: new HttpHeaders({ 'creator': loggedId }) });
  }

}
