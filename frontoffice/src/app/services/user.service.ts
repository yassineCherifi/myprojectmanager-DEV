import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    name: '',
    email: '',
    password: ''
  }
  //noAuthorized = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };

  constructor(private httpClient: HttpClient) { }

  postUser(user: User) {
    return this.httpClient.post(environment.API_URL + '/register', user);
  }

  login(infos) {
    return this.httpClient.post(environment.API_URL + '/login', infos);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.API_URL + '/users');
  }

  logout() {
    return this.httpClient.get(environment.API_URL + '/logout');
  }

  setToken(infos) {
    localStorage.setItem('userinfos', JSON.stringify({ infos }));
  }

  removeToken() {

  }

  getUser(email: string): Observable<User> {
    return this.httpClient.get<User>(environment.API_URL + '/users' + email);
  }

  editUser(user: User) {
    console.log(user);
    return this.httpClient.put(environment.API_URL + '/users/' + this.getIDOflogged(), user);
  }

  getUserInfos() {

  }

  getDashboard() {
    return this.httpClient.get(environment.API_URL + '/dashboard');
  }



  getIDOflogged() {
    const user = localStorage.getItem('userinfos');
    return JSON.parse(user).infos._id;
  }
}
