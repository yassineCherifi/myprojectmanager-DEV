import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tasks } from '../models/tasks.model';

@Injectable({
    providedIn: 'root'
  })


export class TasksService {

    constructor(private httpClient: HttpClient) { }
   
    getTasks(idProject): Observable<Tasks[]>{
    
      return this.httpClient.get<Tasks[]>(environment.API_URL + '/projects/' + idProject + '/tasks');

    }

    addTask(idProject, task){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/tasks', task);
    }

    editTask(idProject, taskId,task){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/tasks/' + taskId,task);
    }

    removeTask(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/tasks/' + id);
    }


}