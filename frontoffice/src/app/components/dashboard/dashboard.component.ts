import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfos;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getDashboard().subscribe(
      res =>{
        this.userInfos = res['user'];
      },
      err => {}
    )
  }

  logout() {
    this.userService.removeToken();
    this.router.navigate(['/login']);
  }
}
