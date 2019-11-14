import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sprints } from '../models/sprints.model';

@Injectable({
  providedIn: 'root'
})


export class SprintService {

  constructor(private httpClient: HttpClient) { }

  getSprints(idProject): Observable<Sprints[]> {
    return this.httpClient.get<Sprints[]>(environment.API_URL + '/projects/' + idProject + '/sprints');
  }

  getSprint(idProject, idSprint) {
    return this.httpClient.get(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint);
  }

  addSprint(idProject, sprint) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/sprints', sprint);
  }

  editSprint(idProject, idSprint, sprint) {
    return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint, sprint);
  }

  removeSprint(idProject, id) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/sprints/' + id);
  }

  addIssueSprint(idProject, idSprint, idIssue) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues',idIssue);
  }

  removeIssue(idProject, idSprint, idIssue) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues/' + idIssue);
  }

}

