import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private httpClient: HttpClient) { }

  getInvitations(idProject):Observable<any[]> {
    return this.httpClient.get<any[]>(environment.API_URL + '/projects/' + idProject + '/invitations');
  }

  inviteContributor(idProject, email) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/invite', { email });
  }

  addContributor(idProject, email) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/contributors', { email });
  }

  removeContributor(idProject, id_user) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/contributors/' + id_user);
  }
}
