import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  userInfos;
  constructor(private userService: UserService, private router: Router) { }

  /**
   * Initialize the Dashboard component.
   */
  ngOnInit() {
    this.userService.getDashboard().subscribe(
      res => {
        const user = 'user';
        this.userService.setToken(res[user]);
        this.userInfos = res[user];
      },
      err => { }
    );
  }

  /**
   * Logout the current user.
   */
  logout() {
    this.userService.logout().subscribe(
      res => {
        localStorage.removeItem('userinfos');
        this.router.navigate(['login']);
      },
      err => { }
    );
  }
}
