import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Releases } from '../models/releases.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })


export class ReleasesService {

    constructor(private httpClient: HttpClient) { }

    getReleases(idProject): Observable<Releases[]>{
      return this.httpClient.get<Releases[]>(environment.API_URL + '/projects/' + idProject + '/releases');
    }

    addRelease(idProject, release){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/releases', release);
    }

    editRelease(idProject, releaseId,release){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/releases/' + releaseId,release);
    }

    removeRelease(idProject, id){
      console.log(idProject + " hhhh" + id);
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/releases/' + id);
    }


}