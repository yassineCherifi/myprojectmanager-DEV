import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the invitation list for the project.
   * @param idProject id of the project.
   */
  getInvitations(idProject): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.API_URL + '/projects/' + idProject + '/invitations');
  }

  /**
   * Invite a contributor to the project.
   * @param idProject id of the project.
   * @param email email adress of the contributor.
   */
  inviteContributor(idProject, email) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/invite', { email });
  }

  /**
   * Add a contributor to the project.
   * @param idProject id of the project.
   * @param email email adress of the contributor.
   */
  addContributor(idProject, email) {
    return this.httpClient.post(environment.API_URL + '/projects/' + idProject + '/contributors', { email });
  }

  /**
   * Remove a contributor from the project.
   * @param idProject id of the project.
   * @param id_user id of the contributor.
   */
  removeContributor(idProject, idUser) {
    return this.httpClient.delete(environment.API_URL + '/projects/' + idProject + '/contributors/' + idUser);
  }
}
