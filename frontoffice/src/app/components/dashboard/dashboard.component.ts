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

  ngOnInit() {
    this.userService.getDashboard().subscribe(
      res => {
        this.userService.setToken(res['user']);
        this.userInfos = res['user'];
      },
      err => { }
    )
  }

  logout() {
    this.userService.logout().subscribe(
      res => {
        localStorage.removeItem('userinfos');
        this.router.navigate(['login']);
      },
      err => { }
    )
  }
}

