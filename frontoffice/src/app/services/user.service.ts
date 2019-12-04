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

  constructor(private httpClient: HttpClient) { }

  /**
   * Register a new user.
   * @param user user to be added.
   */
  postUser(user: User) {
    return this.httpClient.post(environment.API_URL + '/register', user);
  }

  /**
   * Login a user.
   * @param infos login credentials.
   */
  login(infos) {
    return this.httpClient.post(environment.API_URL + '/login', infos);
  }

  /**
   * Get the user list.
   */
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.API_URL + '/users');
  }

  /**
   * Logout the current user.
   */
  logout() {
    return this.httpClient.get(environment.API_URL + '/logout');
  }

  /**
   * Create a token for the current user.
   * @param infos user parameters.
   */
  setToken(infos) {
    localStorage.setItem('userinfos', JSON.stringify({ infos }));
  }

  /**
   * Get a user.
   * @param email email of the user.
   */
  getUser(email: string): Observable<User> {
    return this.httpClient.get<User>(environment.API_URL + '/users' + email);
  }

  /**
   * Edit a user.
   * @param user user to be edited.
   */
  editUser(user: User) {
    console.log(user);
    return this.httpClient.put(environment.API_URL + '/users/' + this.getIDOflogged(), user);
  }

  /**
   * Get the current user dashboard.
   */
  getDashboard() {
    return this.httpClient.get(environment.API_URL + '/dashboard');
  }

  /**
   * Get the id of the current user.
   */
  getIDOflogged() {
    const user = localStorage.getItem('userinfos');
    return JSON.parse(user).infos._id;
  }
}
