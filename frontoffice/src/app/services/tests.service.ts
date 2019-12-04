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

    /**
     * Get the test list of the project.
     * @param idProject id of the project.
     */
    getTests(idProject): Observable<Tests[]> {
      return this.httpClient.get<Tests[]>(environment.API_URL + '/projects/' + idProject + '/tests');
    }

    /**
     * Add a test to the project.
     * @param idProject id of the project.
     * @param test test to be added.
     */
    addTest(idProject, test) {
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/tests', test);
    }

    /**
     * Edit a test from the project.
     * @param idProject id of the project.
     * @param testId id of the test.
     * @param test edited test.
     */
    editTest(idProject, testId, test) {
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/tests/' + testId, test);
    }

    /**
     * Remove a test from the project.
     * @param idProject id of the project.
     * @param id id of the test to remove.
     */
    removeTest(idProject, id) {
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/tests/' + id);
    }
}
