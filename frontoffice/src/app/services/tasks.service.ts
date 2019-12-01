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

    /**
     * Get the task list of the project.
     * @param idProject id of the project.
     */
    getTasks(idProject): Observable<Tasks[]>{
      return this.httpClient.get<Tasks[]>(environment.API_URL + '/projects/' + idProject + '/tasks');
    }

    /**
     * Add a task to the project.
     * @param idProject id of the project.
     * @param task task to be added.
     */
    addTask(idProject, task){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/tasks', task);
    }

    /**
     * Edit a task from the project.
     * @param idProject id of the project.
     * @param taskId id of the task.
     * @param task edited task.
     */
    editTask(idProject, taskId,task){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/tasks/' + taskId,task);
    }

    /**
     * Remove a task from the project.
     * @param idProject id of the project.
     * @param id id of the task to remove.
     */
    removeTask(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/tasks/' + id);
    }
}
