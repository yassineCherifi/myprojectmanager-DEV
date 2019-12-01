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

    /**
     * Get the release list of the project.
     * @param idProject id of the project.
     */
    getReleases(idProject): Observable<Releases[]>{
      return this.httpClient.get<Releases[]>(environment.API_URL + '/projects/' + idProject + '/releases');
    }

    /**
     * Add a release to the project.
     * @param idProject id of the project.
     * @param release release to be added.
     */
    addRelease(idProject, release){
        return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/releases', release);
    }

    /**
     * Edit a release of the project.
     * @param idProject id of the project.
     * @param releaseId id of the release.
     * @param release edited release.
     */
    editRelease(idProject, releaseId,release){
      return this.httpClient.put(environment.API_URL + '/projects/' + idProject + '/releases/' + releaseId,release);
    }

    /**
     * Remove a release from the project.
     * @param idProject id of the project.
     * @param id id of the release to remove.
     */
    removeRelease(idProject, id){
      return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/releases/' + id);
    }
}
