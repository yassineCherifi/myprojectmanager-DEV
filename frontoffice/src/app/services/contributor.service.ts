import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private httpClient: HttpClient) { }


  addContributor(idProject, email){
      return this.httpClient.post(environment.API_URL +  '/projects/' + idProject + '/contributors', {email});
  }

  removeContributor(idProject, id_user){
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/contributors/' + id_user);
  }
}
