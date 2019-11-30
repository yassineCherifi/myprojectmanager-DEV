import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documentations } from '../models/documentations.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })


export class DocumentationsService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Get the documentation of the project.
     * @param idProject id of the project.
     */
    getDocumentations(idProject): Observable<Documentations[]>{
      return this.httpClient.get<Documentations[]>(environment.API_URL + '/projects/' + idProject + '/documentations');
    }

    /**
     * Add a documentation reference to the project.
     * @param idProject id of the project.
     * @param documentation documentation to add.
     */
    addDocumentation(idProject, documentation){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/documentations', documentation);
    }

    /**
     * Edit a documentartion reference of the project.
     * @param idProject id of the project.
     * @param documentationId id of the documentation.
     * @param documentation edited documentation.
     */
    editDocumentation(idProject, documentationId,documentation){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/documentations/' + documentationId,documentation);
    }


    /**
     * Remove a documentation reference of the project.
     * @param idProject id of the project.
     * @param id id of the documentation to remove.
     */
    removeDocumentation(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/documentations/' + id);
    }
}
