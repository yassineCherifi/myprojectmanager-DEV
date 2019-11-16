import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tests } from '../models/tests.model';

@Injectable({
    providedIn: 'root'
  })


export class TestsService {

    constructor(private httpClient: HttpClient) { }

    getTests(idProject): Observable<Tests[]>{
      return this.httpClient.get<Tests[]>(environment.API_URL + '/projects/' + idProject + '/tests');
    }

    addTest(idProject, test){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/tests', test);
    }

    editTest(idProject, testId,test){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/tests/' + testId,test);
    }

    removeTest(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/tests/' + id);
    }
}
