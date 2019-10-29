import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    name: '',
    email: '',
    password: ''
  }
  noAuthorized = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };

  constructor(private httpClient: HttpClient) { }

  postUser(user: User) {
    return this.httpClient.post(environment.API_URL + '/register', user, this.noAuthorized);
  }

  login(infos) {
    return this.httpClient.post(environment.API_URL + '/login', infos, this.noAuthorized);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserInfos() {
    const token = this.getToken();
    if (token) {
      const infos = atob(token.split('.')[1]);
      return JSON.parse(infos);
    }
  }

  getDashboard() {
    return this.httpClient.get(environment.API_URL + '/dashboard');
  }

  isLoggedIn() {
    const userInfos = this.getUserInfos();
    if (userInfos)
      return userInfos.exp > Date.now() / 1000;
    else
      return false;

  }

  getIDOflogged() {
    if (this.isLoggedIn()) {
      const userInfos = this.getUserInfos();
      return userInfos._id;
    }
    return null;
  }
}
