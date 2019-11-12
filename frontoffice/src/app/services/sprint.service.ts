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
   
    getSprints(idProject): Observable<Sprints[]>{
      return this.httpClient.get<Sprints[]>(environment.API_URL + '/projects/' + idProject + '/sprints');
    }

    addSprint(idSprint, sprint){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idSprint + '/sprints', sprint);
    }

    editSprint(idProject, idSprint,sprint){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/sprints/' + idSprint,sprint);
    }

    removeSprint(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/sprints/' + id);
    }


}