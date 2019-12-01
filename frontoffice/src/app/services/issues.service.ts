import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issues } from '../models/issues.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })


export class IssuesService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Get the issues list of the project.
     * @param idProject id of the project.
     */
    getIssues(idProject): Observable<Issues[]>{
      return this.httpClient.get<Issues[]>(environment.API_URL + '/projects/' + idProject + '/issues');
    }

    /**
     * Add an issue to the project.
     * @param idProject id of the project.
     * @param issue issue to be added.
     */
    addIssue(idProject, issue){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/issues', issue);
    }

    /**
     * Edit an issue in the project.
     * @param idProject id of the project.
     * @param issueId id of the issue.
     * @param issue edited issue.
     */
    editIssue(idProject, issueId,issue){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/issues/' + issueId,issue);
    }

    /**
     * Remove an issue from the project.
     * @param idProject id of the project.
     * @param id id of the issue to be removed.
     */
    removeIssue(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/issues/' + id);
    }
}
