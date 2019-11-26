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

    getDocumentations(idProject): Observable<Documentations[]>{
      return this.httpClient.get<Documentations[]>(environment.API_URL + '/projects/' + idProject + '/documentations');
    }

    addDocumentation(idProject, documentation){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/documentations', documentation);
    }

    editDocumentation(idProject, documentationId,documentation){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/documentations/' + documentationId,documentation);
    }

    removeDocumentation(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/documentations/' + id);
    }


}