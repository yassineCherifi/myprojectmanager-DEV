import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'front-cdp2019-grp2-eq3';
  url;
  constructor(userService: UserService, activated: ActivatedRoute,router: Router) {
    if (window.location.href.includes('login') && userService.getIDOflogged() !== undefined) {
      router.navigate(['dashboard']);
    }
  }

}
