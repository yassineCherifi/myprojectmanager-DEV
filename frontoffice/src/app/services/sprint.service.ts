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

  /**
   * Get the sprint list of the project.
   * @param idProject id of the project.
   */
  getSprints(idProject): Observable<Sprints[]> {
    return this.httpClient.get<Sprints[]>(environment.API_URL + '/projects/' + idProject + '/sprints');
  }

  /**
   * Get a sprint from the project.
   * @param idProject id of the project.
   * @param idSprint id of the sprint.
   */
  getSprint(idProject, idSprint) {
    return this.httpClient.get(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint);
  }

  /**
   * Add a sprint to the project.
   * @param idProject id of the project.
   * @param sprint sprint to be added.
   */
  addSprint(idProject, sprint) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/sprints', sprint);
  }

  /**
   * Edit a sprint of the project.
   * @param idProject id of the project.
   * @param idSprint id of the sprint.
   * @param sprint edited sprint.
   */
  editSprint(idProject, idSprint, sprint) {
    return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint, sprint);
  }

  /**
   * Remove a sprint from the project.
   * @param idProject id of the project.
   * @param id id of the sprint to remove.
   */
  removeSprint(idProject, id) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/sprints/' + id);
  }

  /**
   * Add an issue to the sprint.
   * @param idProject id of the project.
   * @param idSprint id of the sprint.
   * @param idIssue id of the issue.
   */
  addIssueSprint(idProject, idSprint, idIssue) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues',idIssue);
  }

  /**
   * Remove an issue from the project.
   * @param idProject id of the project.
   * @param idSprint id of the sprint.
   * @param idIssue id of the issue.
   */
  removeIssue(idProject, idSprint, idIssue) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues/' + idIssue);
  }

}
