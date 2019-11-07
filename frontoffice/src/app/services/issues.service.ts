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
   
    getIssues(idProject): Observable<Issues[]>{
    
      return this.httpClient.get<Issues[]>(environment.API_URL + '/projects/' + idProject + '/issues');

    }

    addIssue(idProject, issue){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/issues', issue);
    }

    editIssue(idProject, issueId,issue){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/issues/' + issueId,issue);
    }

    removeIssue(idProject, id){
      console.log(idProject + " hhhh" + id);
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/issues/' + id);
    }


}